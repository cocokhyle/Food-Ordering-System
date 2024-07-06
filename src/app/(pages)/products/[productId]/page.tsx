export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <main>
      <h1>Product Details with Id of {params.productId}</h1>
    </main>
  );
}
