export async function getFilteredProductDetails(productId: string) {
  const response = await fetch(
    `http://localhost:3000/products/${productId}/api`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data.product; // Ensure this returns the correct data structure
}
