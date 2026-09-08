import ProductCard from "@/app/(home)/components/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Category, Product } from "@/lib/types";

async function ProductList() {
    const [categoryResponse, productsResponse] = await Promise.all([
        fetch(`${process.env.BACKEND_URL}/api/catalog/categories`, {
            next: {
                revalidate: 3600,
            }
        }),

        fetch(`${process.env.BACKEND_URL}/api/catalog/products`, {
            next: {
                revalidate: 3600,
            }
        })
    ])

    if (!categoryResponse.ok) {
        throw new Error('Unable to load categories');
    }

    if (!productsResponse.ok) {
        throw new Error('Unable to load products');
    }

    const [categories, products] = await Promise.all([
        categoryResponse.json(),
        productsResponse.json()
    ])


    return (
        <>
            <section className="bg-muted/50">
                <div className="max-w-300.75 mx-auto py-12">
                    <Tabs defaultValue={categories[0]._id}>
                        <TabsList>
                            {categories?.map((category: Category) => {
                                return (
                                    <TabsTrigger
                                        key={category._id}
                                        value={category._id}
                                        className="text-md"
                                    >
                                        {category.name}
                                    </TabsTrigger>
                                )
                            })}

                        </TabsList>
                        {categories.map((category: Category) => {
                            return (
                                <TabsContent value={category._id} key={category._id}>
                                    <div className="mx-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                                        {products.data.filter((product: Product) => product.category._id === category._id).map((product: Product) => (
                                            <ProductCard product={product} key={product._id} />
                                        ))}
                                    </div>
                                </TabsContent>
                            )
                        })}
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default ProductList;
