'use client';
import { stringify } from 'querystring';
import { getFilteredProductDetails } from './api/action';
import { useState, useEffect } from 'react';

interface ProductDetails {
  id: number;
  imgLink: string;
  title: string;
  price: number;
  badge: string;
  description: string;
  categories: string[];
}

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await getFilteredProductDetails(params.productId);
        console.log('fetch data:', stringify(product));
        setProducts(product);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.productId]);

  console.log();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!products) {
    return <div>No product found.</div>;
  }

  return (
    <main>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <h1>{product.id}</h1>
        </div>
      ))}
    </main>
  );
}
