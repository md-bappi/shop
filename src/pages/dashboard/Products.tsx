import React, { useState } from "react";
import { LuBox } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";

type Rating = {
  count: number;
  avg?: number;
};

type Category = {
  _id: string;
  name: string;
};

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  stock: number;
  images: string[]; // urls
  ratings: Rating;
  createdAt: string;
};

const sampleProducts: Product[] = [
  {
    _id: "p1",
    title: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones",
    price: 120,
    category: { _id: "c1", name: "Electronics" },
    stock: 120,
    images: ["https://via.placeholder.com/150"],
    ratings: { count: 320, avg: 4.6 },
    createdAt: new Date().toISOString(),
  },
  {
    _id: "p2",
    title: "Smart Watch",
    description: "Classic smart watch with HR sensor",
    price: 150,
    category: { _id: "c1", name: "Electronics" },
    stock: 60,
    images: ["https://via.placeholder.com/150"],
    ratings: { count: 210, avg: 4.4 },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    _id: "p3",
    title: "Running Shoes",
    description: "Lightweight running shoes",
    price: 80,
    category: { _id: "c2", name: "Sportswear" },
    stock: 40,
    images: ["https://via.placeholder.com/150"],
    ratings: { count: 180, avg: 4.3 },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  },
];

const Products = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });

  // compute category totals from populated category.name
  const categoryTotals = products.reduce<Record<string, number>>((acc, p) => {
    const name = p.category?.name || "Uncategorized";
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove invalid chars
      .replace(/\s+/g, "_")
      .replace(/_+/g, "_");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = form.title.trim();
    const categoryName = form.category.trim();
    const priceNum = Number(form.price);
    const stockNum = form.stock ? Number(form.stock) : 0;
    const imageUrl = form.image.trim();

    // basic validation
    if (
      !title ||
      !categoryName ||
      !form.price ||
      Number.isNaN(priceNum) ||
      priceNum <= 0
    ) {
      // you can show a toast or error state here
      return;
    }

    const newProduct: Product = {
      _id: `p_${Date.now()}`,
      title,
      description: form.description.trim() || "",
      price: priceNum,
      category: {
        _id: `cat_${slugify(categoryName)}`,
        name: categoryName,
      },
      stock: stockNum,
      images: imageUrl ? [imageUrl] : [],
      ratings: { count: 0, avg: 0 },
      createdAt: new Date().toISOString(),
    };

    setProducts((prev) => [newProduct, ...prev]);
    setForm({
      title: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      image: "",
    });
    setModalOpen(false);

    // TODO: POST to backend: axios.post('/api/products', newProduct)
  };

  return (
    <div>
      <main className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Products Overview</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[var(--color-bg-btn)] text-white px-4 py-2 rounded-md hover:bg-[var(--color-bg-btn-hover)] transition"
          >
            Add New Product
          </button>
        </div>

        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Total Products</div>
                <div className="text-xl font-semibold mt-1">
                  {products.length}
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
                <LuBox size={18} className="text-indigo-600" />
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              All listed products
            </div>
          </div>

          {/* Category totals */}
          {Object.entries(categoryTotals).map(([category, total]) => (
            <div
              key={category}
              className="p-4 rounded-lg bg-white shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">{category}</div>
                  <div className="text-xl font-semibold mt-1">{total}</div>
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                  <IoCartOutline size={18} className="text-green-600" />
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-2">{total} products</div>
            </div>
          ))}
        </section>

        {/* Recent Products (list with stock, price, rating) */}
        <section className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Recent Products</h3>
            <div className="text-sm text-gray-500">Updated just now</div>
          </div>

          <ul className="divide-y">
            {products.map((p) => (
              <li key={p._id} className="py-3 flex items-center gap-4">
                <img
                  src={p.images[0] || "https://via.placeholder.com/80"}
                  alt={p.title}
                  className="w-16 h-16 rounded-md object-cover border"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{p.title}</div>
                      <div className="text-xs text-gray-500">
                        {p.category?.name}
                      </div>
                    </div>
                    <div className="text-sm font-semibold">
                      ${p.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Stock:{" "}
                    <span
                      className={
                        p.stock > 0 ? "text-green-600" : "text-red-600"
                      }
                    >
                      {p.stock}
                    </span>
                    {" • "}
                    Ratings:{" "}
                    {p.ratings?.avg
                      ? `${p.ratings.avg} (${p.ratings.count})`
                      : `${p.ratings.count} ratings`}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-sm font-medium">Title</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-2 py-1 mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-2 py-1 mt-1"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <input
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-2 py-1 mt-1"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-2 py-1 mt-1"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Stock</label>
                  <input
                    name="stock"
                    type="number"
                    value={form.stock}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-2 py-1 mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Image URL</label>
                <input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-2 py-1 mt-1"
                />
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-[var(--color-bg-btn)] text-white hover:bg-[var(--color-bg-btn-hover)] transition"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
