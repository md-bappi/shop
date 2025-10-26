"use client";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiShoppingCart, FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { fetchProducts } from "../../features/products/productsSlice";
import { decrement, increment } from "../../features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, isLoading, isError } = useSelector(
    (state) => state.products
  );

  const counter = useSelector((state) => state.cart);
  console.log(counter);

  // Fetch products if not already loaded
  useEffect(() => {
    if (!products || (products?.payload && products.payload.length === 0)) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  // Normalize payload
  const productList =
    products?.payload?.payload || products?.payload || products || [];

  const product = productList.find((p) => p._id === id);

  // Utility: parse price safely
  const parsePrice = (p) => {
    const n =
      typeof p === "number"
        ? p
        : parseFloat(String(p).replace(/[^0-9.-]+/g, ""));
    return Number.isFinite(n) ? n : 0;
  };

  const formatMoney = (v) => Number(v).toFixed(2);

  if (isLoading) return <p className="text-center mt-20">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-20 text-red-500">Error loading product.</p>
    );
  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  // Get quantity from Redux cart state (fallback to 1)
  const quantity = Number(counter?.count) > 0 ? Number(counter.count) : 1;
  const unitPrice = parsePrice(product.price);
  const total = unitPrice * quantity;

  const handleAddToCart = () => {
    // Use quantity from Redux counter
    const payloadQuantity = quantity;
    const payloadTotal = unitPrice * payloadQuantity;

    dispatch({
      type: "cart/addItem",
      payload: {
        productId: product._id,
        title: product.title,
        price: unitPrice,
        quantity: payloadQuantity,
        total: payloadTotal,
        image: product.image?.url || null,
      },
    });

    alert(
      `Added ${payloadQuantity} × ${
        product.title
      } to cart — Total $${formatMoney(payloadTotal)}`
    );
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      {/* Back button */}
      <button
        onClick={() => navigate("/products")}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6"
      >
        <FiArrowLeft size={20} /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="w-full h-96 overflow-hidden rounded-xl shadow-sm">
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

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              {product.title}
            </h1>
            <p
              className="text-gray-700 mb-4"
              style={{ color: "var(--color-text)" }}
            >
              {product.description}
            </p>
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: "var(--color-bg-btn)",
                color: "#fff",
              }}
            >
              {product.category}
            </span>

            <div
              className="text-3xl font-bold mt-4"
              style={{ color: "var(--color-text)" }}
            >
              ${formatMoney(unitPrice)}
            </div>

            {/* Quantity controls driven by Redux state.cart */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => dispatch(decrement())}
                className="p-2 rounded-md border hover:shadow-sm"
                disabled={quantity <= 1}
                title={
                  quantity <= 1 ? "Minimum quantity is 1" : "Decrease quantity"
                }
              >
                <FiMinus />
              </button>

              <span className="w-20 text-center px-2 py-1 border rounded-md">
                {quantity}
              </span>

              <button
                onClick={() => dispatch(increment())}
                className="p-2 rounded-md border hover:shadow-sm"
                title="Increase quantity"
              >
                <FiPlus />
              </button>

              <div className="ml-4 text-lg">Total: ${formatMoney(total)}</div>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
            style={{
              backgroundColor: "var(--color-bg-btn)",
              color: "#fff",
            }}
          >
            <FiShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
