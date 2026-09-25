'use client';
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/lib/store/hooks";
import { getItemTotal } from "@/lib/utils";
import { ArrowRight } from "lucide-react"
import { useMemo } from "react";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function CartItems() {
    const cart = useAppSelector((state) => state.cart.cartItems);

    const finalTotal = useMemo(() => {
        return cart.reduce((acc, curr) => {
            return acc + curr.qty * getItemTotal(curr);
        }, 0);
    }, [cart]);

    if (!cart.length) {
        return (
            <EmptyCart />
        );
    }

    return (
        <section className='bg-white p-4 rounded-2xl'>
            <div className=" flex flex-col gap-8">
                {cart.map((cartItem) => (
                    <CartItem key={cartItem.hash} item={cartItem} />
                ))}
                <div className="flex justify-between items-center">
                    <span className="font-bold text-xl">total: &#8377;{finalTotal}</span>
                    <Button>
                        Checkout
                        <ArrowRight size={16} className="ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CartItems
