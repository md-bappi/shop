"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import { Link } from "react-router-dom"; // correct Link for React Router
import { FiShoppingCart, FiChevronRight } from "react-icons/fi";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Normalize payload
  const productList =
    products?.payload?.payload || products?.payload || products || [];

  if (isLoading) return <p className="text-center mt-20">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-20 text-red-500">
        Error: {error || "Something went wrong"}
      </p>
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2
        className="text-3xl font-bold mb-6"
        style={{ color: "var(--color-text)" }}
      >
        All Products
      </h2>

      {productList.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList.map((product) => (
            <Link key={product._id} to={`/products/${product._id}`}>
              <div
                className="block rounded-xl shadow-sm overflow-hidden transform hover:-translate-y-1 transition duration-200"
                style={{ backgroundColor: "var(--color-bg-light)" }}
              >
                {/* Image */}
                <div className="w-full h-48 md:h-56 overflow-hidden relative">
                  {product.image?.url ? (
                    <img
                      src={product.image.url}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                      No image
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="flex justify-between items-start gap-2">
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {product.title}
                    </h3>
                    <FiChevronRight
                      size={20}
                      style={{ color: "var(--color-text)" }}
                    />
                  </div>

                  {/* Truncated description (2 lines) */}
                  <p
                    className="mt-2 text-sm text-gray-600"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      color: "var(--color-text)",
                    }}
                    title={product.description}
                  >
                    {product.description}
                  </p>

                  {/* Price + Add button */}
                  <div className="mt-4 flex items-center justify-between">
                    <div
                      className="text-lg font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      ${product.price}
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // prevent navigating to details
                        alert(`Add ${product.title} to cart`);
                      }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium focus:outline-none"
                      style={{
                        backgroundColor: "var(--color-bg-btn)",
                        color: "#fff",
                      }}
                    >
                      <FiShoppingCart />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
