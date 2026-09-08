import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductList from "./components/product-list";
import { Suspense } from "react";
import { SkeletonTable } from "./components/skeleton-table";

export default async function Home() {
    return (
        <>
            <section id="home-page" className="bg-white">
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
            <Suspense fallback={<SkeletonTable />}>
                <ProductList />
            </Suspense>

        </>
    );
}
