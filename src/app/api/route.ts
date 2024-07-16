import { productDetails, productDetailsCarousel } from '@/app/_lib/productData';

export async function GET() {
  const response = {
    productDetails,
    productDetailsCarousel,
  };

  return Response.json(response);
}
