'use client';

import { useProducts } from '@/hooks/useProducts';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const { products, loading, error } = useProducts();

  const getIcon = (rating: number) => {
    if (rating < 3) return '/icons/low.png';
    if (rating < 4) return '/icons/medium.png';
    return '/icons/high.png';
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10 bg-red-100 p-5">{error}</div>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-200 ">

      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} passHref>
          <div className="p-4 rounded-lg shadow transition cursor-pointer hover:opacity-70">
            <Image
              src={product.thumbnail}
              alt="product image"
              width={250}
              height={250}
            />
            <h2 className="text-xl font-bold mt-2">{product.title}</h2>
            <h2 className="text-xl mt-2">{product.description}</h2>

            <div className="flex flex-row items-center gap-4">
              <p className="text-sm text-gray-600">Rating: {product.rating}</p>
              <p className="text-sm text-gray-600">Stock: {product.stock}</p>
              <p className="text-sm text-gray-600">Price: {product.price} $</p>
              <Image
                src={getIcon(product.rating)}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
