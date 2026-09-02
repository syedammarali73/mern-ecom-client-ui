'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ToppingList from './topping-list';
import { Topping } from '@/lib/types';

const ProductModal = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const product = {
        name: 'Classic Margherita Pizza',
        description:
            'A delicious combination of fresh mozzarella, tomato sauce, basil and our signature herbs.',
        image: '/pizza-main.png',
    };

    const configurations = [
        {
            name: 'Size',
            options: [
                { name: 'Small', price: 199 },
                { name: 'Medium', price: 299 },
                { name: 'Large', price: 399 },
            ],
        },
        {
            name: 'Crust',
            options: [
                { name: 'Thin', price: 0 },
                { name: 'Thick', price: 50 },
            ],
        },
    ];

    const toppings: Topping[] = [
        { id: '1', name: 'Extra Cheese', image: '/cheese.png', price: 50, isAvailable: true },
        { id: '2', name: 'Chicken', image: '/chicken.png', price: 50, isAvailable: true },
        { id: '3', name: 'Jalapeños', image: '/jelapeno.png', price: 50, isAvailable: true },
    ];

    const [selectedSize, setSelectedSize] = useState('Small');
    const [selectedCrust, setSelectedCrust] = useState('Thin');
    const [selectedTopping, setSelectedTopping] = useState<Topping | null>(null);

    const sizePrice =
        configurations[0].options.find((item) => item.name === selectedSize)?.price ?? 0;

    const crustPrice =
        configurations[1].options.find((item) => item.name === selectedCrust)?.price ?? 0;

    const toppingsPrice = selectedTopping?.price ?? 0;


    const totalPrice = sizePrice + crustPrice + toppingsPrice;

    const toggleTopping = (topping: Topping) => {
        setSelectedTopping((current) =>
            current?.id === topping.id ? null : topping
        );
    };


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
                        <div className="mb-6">
                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="font-semibold">Choose Size</h3>
                                <span className="text-xs text-muted-foreground">
                                    Required
                                </span>
                            </div>

                            <RadioGroup
                                value={selectedSize}
                                onValueChange={setSelectedSize}
                                className="grid grid-cols-3 gap-3">
                                {configurations[0].options.map((option) => (
                                    <RadioGroupItem
                                        key={option.name}
                                        value={option.name}
                                        className="h-auto w-full aspect-auto cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-muted bg-card p-4 transition-all hover:border-orange-300 data-checked:border-orange-500 data-checked:bg-orange-50 data-checked:text-foreground"
                                    >
                                            <span className="font-medium">{option.name}</span>
                                            <span className="mt-1 text-xs text-muted-foreground">
                                                ₹{option.price}
                                            </span>
                                    </RadioGroupItem>
                                ))}
                            </RadioGroup>
                        </div>

                        {/* Crust */}
                        <div className="mb-6">
                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="font-semibold">Choose Crust</h3>
                                <span className="text-xs text-muted-foreground">
                                    Required
                                </span>
                            </div>

                            <RadioGroup
                                value={selectedCrust}
                                onValueChange={setSelectedCrust}
                                className="grid grid-cols-3 gap-3">
                                {configurations[1].options.map((option) => (
                                    <RadioGroupItem
                                        key={option.name}
                                        value={option.name}
                                        className="h-auto w-full aspect-auto cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-muted bg-card p-4 transition-all hover:border-orange-300 data-checked:border-orange-500 data-checked:bg-orange-50 data-checked:text-foreground"
                                    >
                                            <span className="font-medium">{option.name}</span>
                                            <span className="mt-1 text-xs text-muted-foreground">
                                                {option.price > 0 ? `+₹${option.price}` : 'Included'}
                                            </span>
                                    </RadioGroupItem>
                                ))}
                            </RadioGroup>
                        </div>

                        <ToppingList
                            toppings={toppings}
                            selectedTopping={selectedTopping}
                            onToppingToggle={toggleTopping}
                        />

                        {/* Footer */}
                        <div className="flex items-center justify-between border-t pt-5">
                            <div>
                                <p className="text-xs text-muted-foreground">Total Price</p>
                                <p className="text-2xl font-bold">₹{totalPrice}</p>
                            </div>

                            <Button
                                size="lg"
                                className="rounded-xl px-6"
                                onClick={() => setDialogOpen(false)}>
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
