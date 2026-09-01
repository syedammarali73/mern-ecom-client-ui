import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "@/app/(home)/components/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {

    const products: Product[] = [
        {
            id: '1',
            name: 'Margarita Pizza',
            description: 'This is a very tasty pizza',
            image: '/pizza-main.png',
            price: 500,
        },
        {
            id: '2',
            name: 'Margarita Pizza',
            description: 'This is a very tasty pizza',
            image: '/pizza-main.png',
            price: 500,
        },
        {
            id: '3',
            name: 'Margarita Pizza',
            description: 'This is a very tasty pizza',
            image: '/pizza-main.png',
            price: 500,
        },
        {
            id: '4',
            name: 'Margarita Pizza',
            description: 'This is a very tasty pizza',
            image: '/pizza-main.png',
            price: 500,
        },
        {
            id: '5',
            name: 'Margarita Pizza',
            description: 'This is a very tasty pizza',
            image: '/pizza-main.png',
            price: 500,
        },
    ];

    return (
        <>
            <section className="bg-white">
                <div className="container flex flex-col lg:flex-row sm:px-2 lg:px-6 items-center justify-between py-24 max-w-300.75 mx-auto">
                    <div>
                        <h1 className="sm:text-6xl lg:text-7xl font-black font-sans leading-9">
                            Super Delicious Pizza in
                            <br /><br />
                            <span className="text-primary">Only 45 Minutes!</span>
                        </h1>
                        <p className="text-2xl mt-8 max-w-lg leading-snug">
                            Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
                        </p>
                        <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
                            Get your pizza now
                        </Button>
                    </div>
                    <div>
                        <Image alt="pizza-main" src={"/pizza-main.png"} width={400} height={400} />
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-300.75 mx-auto py-12">
                    <Tabs defaultValue="pizza">
                        <TabsList>
                            <TabsTrigger value="pizza" className="text-md">Pizza</TabsTrigger>
                            <TabsTrigger value="beverages" className="text-md">Beverages</TabsTrigger>
                        </TabsList>
                        <TabsContent value="pizza">
                            <div className="mx-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                                {products.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="beverages">
                            <div className="mx-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                                {products.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}
