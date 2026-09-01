'use client';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '../../../components/ui/card'
import ProductModal from './product-modal';
import { useState } from 'react';

export type Product = {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
};

type PropTypes = { product: Product };

function ProductCard({ product }: PropTypes) {
    return (
        <Card className='border-none rounded-xl'>
            <CardHeader className='flex items-center justify-center'>
                <Image alt='pizza-image' width={150} height={150} src={product.image} />
            </CardHeader>
            <CardContent>
                <h2 className='text-xl font-bold'>{product.name}</h2>
                <p className='mt-2'>{product.description}</p>
            </CardContent>
            <CardFooter className='flex items-center justify-between mt-4'>
                <p>
                    <span>From </span>
                    <span className='font-bold'>₹{product.price}</span>
                </p>

                <ProductModal />
            </CardFooter>
        </Card>
    )
}

export default ProductCard
