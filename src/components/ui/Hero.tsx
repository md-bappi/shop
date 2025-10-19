import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import type { RootState, AppDispatch } from "../../app/store";

const Hero: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, isError, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error}</p>;

  return (
    <section>
      <h1>Hero</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 12,
        }}
      >
        {products.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ddd", padding: 8 }}>
            {p.image?.url ? (
              <img
                src={p.image.url}
                alt={p.title}
                style={{ maxWidth: "100%", height: 120, objectFit: "cover" }}
              />
            ) : (
              <div style={{ height: 120, background: "#f3f3f3" }} />
            )}
            <h3>{p.title}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
