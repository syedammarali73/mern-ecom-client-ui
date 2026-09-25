import CartItems from "./components/CartItems";

function cartPage() {
    return (
        <section>
            <div className="container mx-auto py-6">
                <h1 className="text-2xl font-bold text-center">Shopping cart</h1>
                <div className="rounded-lg p-6 m-6">
                    <CartItems />
                </div>
            </div>
        </section>
    )
}

export default cartPage
