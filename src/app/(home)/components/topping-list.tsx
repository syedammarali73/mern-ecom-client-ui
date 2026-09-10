import { Topping } from '@/lib/types';
import ToppingCard from './topping-card';
import { useEffect, useState } from 'react';


function ToppingList() {
    const [toppings, setToppings] = useState<Topping[]>([]);
    const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const toppingResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/catalog/toppings`)
            const toppings = await toppingResponse.json();
            setToppings(toppings.data);
            console.log('toppings', toppings);
        }
        fetchData();
    }, []);

    const onToppingToggle = (topping: Topping) => {
        const isAlreadyExists = selectedToppings.some(
            (element: Topping) => element._id === topping._id
        );
        if (isAlreadyExists) {
            setSelectedToppings((prev) => prev.filter((elm: Topping) => elm._id !== topping._id));
        }
        return;
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
