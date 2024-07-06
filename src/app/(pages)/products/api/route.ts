import { productDetails } from '@/app/_lib/productData';
export async function GET() {
  return Response.json(productDetails);
}
