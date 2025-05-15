import { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/api';
import { Product } from '@/types/product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const cached = localStorage.getItem('products');

    const isValidData = (data: Product[]) => {
      return Array.isArray(data) && data.length > 0 && data.every(p => p.id && p.title && p.thumbnail);
    };

    if (cached) {
      const parsed = JSON.parse(cached);
      if (isValidData(parsed)) {
        setProducts(parsed);
        setLoading(false);
        return;
      }
    }
    
    // fetch again if the catch was invalid
    fetchProducts()
      .then(data => {
        setProducts(data);
        if (isValidData(data)) {
          localStorage.setItem('products', JSON.stringify(data));
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};
