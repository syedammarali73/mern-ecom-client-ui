import { Topping } from '@/lib/types';
import ToppingCard from './topping-card';

type ToppingListProps = {
    toppings: Topping[];
    selectedToppings: Topping[];
    onToppingToggle: (topping: Topping) => void;
};

function ToppingList({ toppings, selectedToppings, onToppingToggle }: ToppingListProps) {

    return (
        <section className='mt-6'>
            <h3>Extra Toppings</h3>
            <div className='grid grid-cols-3 gap-4 mt-3'>
                {
                    toppings.map((topping) => {
                        return <ToppingCard topping={topping} selectedToppings={selectedToppings} onToppingToggle={onToppingToggle} key={topping.id} />
                    })
                }
            </div>
        </section>
    )
}

export default ToppingList
