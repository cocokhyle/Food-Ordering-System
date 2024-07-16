import { NextResponse } from 'next/server';
import { productDetails, productDetailsCarousel } from '@/app/_lib/productData';
export async function GET(request: Request, context: any) {
  const { params } = context;
  const product = productDetails.filter(
    (x) => params.productId === x.id.toString()
  );

  return NextResponse.json({
    product,
  });
}
