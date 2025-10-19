export const fetchProductsFromServer = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Fetch error: ${res.status} ${text}`);
  }
  const data = await res.json();
  return data.payload?.allProducts ?? [];
};
