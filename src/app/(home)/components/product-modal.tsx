'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ShoppingCart } from 'lucide-react';
import { startTransition, Suspense, useMemo, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ToppingList from './topping-list';
import { Product, Topping } from '@/lib/types';
import { SkeletonTable } from './skeleton-table';
import { useAppDispatch } from '@/lib/store/hooks';
import { addToCart } from '@/lib/store/features/cart/cartSlice';

type ChosenConfig = {
    [key: string]: string;
};

const ProductModal = ({ product }: { product: Product }) => {
    const dispatch = useAppDispatch();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);

    const defaultConfiguration = Object.entries(product.category.priceConfiguration)
        .map(([key, value]) => {
            return { [key]: value.availableOptions[0] };
        })
        .reduce((acc, curr) => ({ ...acc, ...curr }), {});

    const [chosenConfig, setChosenConfig] = useState<ChosenConfig>(defaultConfiguration as unknown as ChosenConfig);

    const toggleTopping = (topping: Topping) => {
        const isAlreadyExists = selectedToppings.some((element: Topping) => element._id === topping._id)

        startTransition(() => {
            if (isAlreadyExists) {
                setSelectedToppings((prev) => prev.filter((ele: Topping) => ele._id !== topping._id))
            } else {
                setSelectedToppings((prev) => [...prev, topping]);
            }
        })

    }

    const handleRadioChange = (key: string, data: string) => {
        startTransition(() => {
            setChosenConfig((prev) => {
                return { ...prev, [key]: data }
            })
        })
    }

    const totalPrice = useMemo(() => {
        const toppingsTotal = selectedToppings.reduce((acc, curr) => acc + curr.price, 0);

        const configPricing = Object.entries(chosenConfig).reduce(
            (acc, [key, value]: [string, string]) => {
                const price = product.priceConfiguration[key].availableOptions[value];
                return acc + price;
            },
            0
        );
        return configPricing + toppingsTotal;
    }, [chosenConfig, selectedToppings, product]);

    const handleAddToCart = (product: Product) => {
        const itemIoAdd = {
            product,
            chosenConfiguration: {
                priceConfiguration: chosenConfig,
                selectedToppings: selectedToppings
            }
        }
        dispatch(addToCart(itemIoAdd))
    }


    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <Button
                type="button"
                onClick={() => setDialogOpen(true)}
                className="rounded-full bg-orange-100 px-6 text-orange-600 shadow-sm transition-all hover:bg-orange-200 hover:shadow-md">
                Choose
            </Button>
            <DialogContent className="w-[95vw] max-w-5xl! max-h-[90vh] overflow-y-auto flex flex-col md:flex-row p-0">
                <div className='w-1/3 flex justify-center items-center mx-auto'>
                    {/* Product Image */}
                    <div className="relative aspect-square w-full max-w-76 overflow-hidden rounded-2xl mx-auto">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="eager"
                            className="object-contain p-4 md:p-6 lg:p-8"
                        />
                    </div>
                </div>
                <div>
                    {/* Product Details */}
                    <div className="w-full p-6 md:p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold tracking-tight">
                                {product.name}
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {product.description}
                            </p>
                        </div>

                        {/* Size */}
                        {Object.entries(product.category.priceConfiguration).map(([key, value]) => {
                            return (
                                <div className="mb-6" key={key}>
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="font-semibold">Choose {key}</h3>
                                        <span className="text-xs text-muted-foreground">
                                            Required
                                        </span>
                                    </div>
                                    <div key={key}>
                                        <RadioGroup
                                            defaultValue={value.availableOptions[0]}
                                            onValueChange={(data) => {
                                                handleRadioChange(key, data)
                                            }}
                                            className="grid grid-cols-3 gap-3">
                                            {value.availableOptions.map((option) => (
                                                <div key={option}>
                                                    <RadioGroupItem
                                                        key={option}
                                                        id={option}
                                                        value={option}
                                                        aria-label={option}
                                                        className="h-auto w-full aspect-auto cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-muted bg-card p-4 transition-all hover:border-orange-300 data-checked:border-orange-500 data-checked:bg-orange-50 data-checked:text-foreground"

                                                    >
                                                        <span className="font-medium">{option}</span>
                                                    </RadioGroupItem>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>

                                </div>
                            )
                        })}
                        <Suspense fallback={<SkeletonTable />}>
                            <ToppingList
                                selectedToppings={selectedToppings}
                                onToppingToggle={toggleTopping}
                            />
                        </Suspense>

                        {/* Footer */}
                        <div className="flex items-center justify-between border-t pt-5">
                            <div>
                                <p className="text-xs text-muted-foreground">Total Price</p>
                                <p className="text-2xl font-bold">₹{totalPrice}</p>
                            </div>

                            <Button
                                size="lg"
                                className="rounded-xl px-6"
                                // onClick={() => setDialogOpen(false)}
                                onClick={() => handleAddToCart(product)}
                            >
                                <ShoppingCart size={19} />
                                <span className="ml-2">Add to cart</span>
                            </Button>
                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProductModal;
