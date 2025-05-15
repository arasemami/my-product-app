import { Product } from '@/types/product';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data.products;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
};
