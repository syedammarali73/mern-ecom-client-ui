import { ShoppingCart } from "lucide-react";

function EmptyCart() {
    return (
        <>
            <div className="flex flex-col items-center rounded-lg bg-white m-12 py-16 shadow-sm">
                <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gray-50">
                    <ShoppingCart size={56} strokeWidth={1.25} className="text-gray-300" />
                </div>
                <p className="font-semibold text-gray-700">
                    Cart is empty.{" "}
                    <a href="#" className="font-semibold text-orange-500 underline hover:text-orange-600">
                        Continue shopping?
                    </a>
                </p>
            </div>
        </>
    )
}

export default EmptyCart;