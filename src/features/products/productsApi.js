const getAllProducts = async () => {
  const API = "http://localhost:5000/api/v1/products";
  const res = await fetch(API);
  const data = await res.json();
  return data;
};

export default getAllProducts;
