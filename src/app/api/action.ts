export async function getProductDetails() {
  const response = await fetch('http://localhost:3000/api', {
    headers: {
      'Content-Type': 'product-details',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data.productDetails; // Return the productDetails array
}

export async function getProductCarouselDetails() {
  const response = await fetch('http://localhost:3000/api');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data.productDetailsCarousel; // Return the productDetails array
}
