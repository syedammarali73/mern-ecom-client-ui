'use client';

import { Button } from '@/components/ui/button';
import { Topping } from '@/lib/types';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';

type PropType = {
    topping: Topping;
    selectedToppings: Topping[];
    onToppingToggle: (topping: Topping) => void;
}

function ToppingCard({ topping, selectedToppings, onToppingToggle }: PropType) {
    const isCurrentSelected = selectedToppings.some((item) => item._id === topping._id);

    return (
        <Button
            type="button"
            onClick={() => onToppingToggle(topping)}
            variant='outline'
            className={cn(
                'relative flex h-40 flex-col border-2 bg-card transition-all hover:border-orange-300',
                isCurrentSelected ? 'border-orange-500 bg-orange-50' : 'border-muted ')}>

            <Image src={topping.image} width={80} height={80} alt={topping.name} />
            <h4>{topping.name}</h4>
            <p>&#8377;{topping.price}</p>

            {isCurrentSelected && (
                <CircleCheck className="absolute top-2 right-2 text-orange-500" />
            )}
        </Button>

    )
}

export default ToppingCard;
