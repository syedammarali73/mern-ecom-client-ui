import { Topping } from '@/lib/types';
import ToppingCard from './topping-card';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';


type PropType = {
    selectedToppings: Topping[];
    onToppingToggle: (topping: Topping) => void;
}

function ToppingList({ selectedToppings, onToppingToggle }: PropType) {
    const [toppings, setToppings] = useState<Topping[]>([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            const toppingResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/catalog/toppings?tenantId=${searchParams.get('restaurantId')}`)
            const toppings = await toppingResponse.json();

            if (isMounted) {
                setToppings(toppings.data);
            }
        }
        fetchData();

        return () => {
            isMounted = false;
        }
    }, []);

    if (toppings.length === 0) {
        return <></>
    }

    return (
        <section className='mt-6'>
            <h3>Extra Toppings</h3>
            <div className='grid grid-cols-3 gap-4 mt-3'>
                {
                    toppings.map((topping) => {
                        return <ToppingCard topping={topping} selectedToppings={selectedToppings} onToppingToggle={onToppingToggle} key={topping._id} />
                    })
                }
            </div>
        </section>
    )
}

export default ToppingList
