'use client';

import { Product } from '@/types/product';
import Image from 'next/image';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-lg space-y-6">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h1>
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md"
                />
                <p className="mt-4 text-lg font-medium text-gray-600">{product.description}</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-2">
                    <p className="text-xl font-semibold text-gray-800">Price</p>
                    <p className="text-2xl font-bold text-green-600">${product.price}</p>
                </div>

                <div className="space-y-2">
                    <p className="text-xl font-semibold text-gray-800">Discount</p>
                    <p className="text-xl text-red-500">{product.discountPercentage}% OFF</p>
                </div>

                <div className="space-y-2">
                    <p className="text-xl font-semibold text-gray-800">Stock</p>
                    <p className="text-xl text-blue-500">{product.stock} available</p>
                </div>

                <div className="space-y-2">
                    <p className="text-xl font-semibold text-gray-800">Rating</p>
                    <p className="text-xl text-yellow-500">{product.rating} / 5</p>
                </div>
            </div>
        </div>
    );
}
