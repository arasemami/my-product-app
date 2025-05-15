
import { fetchProductById } from '@/lib/api';
import ProductDetail from './ProductDetail';
import { use } from 'react';

interface Props {
    params: {
        id: string;
    };
}

export default function ProductPage({ params }: Props) {
    const product = use(fetchProductById(params.id));
    return <ProductDetail product={product} />;
}
