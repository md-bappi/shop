import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading)
    return (
      <section className="w-full h-[75vh] flex items-center justify-center">
        <p>Loading...</p>
      </section>
    );

  if (isError) return <p>Error: {error}</p>;

  // const sliderImages = products?.payload?.map((p) => p);

  const sliderImages = products?.payload?.map((p) => p.image.url);

  // products?.payload.length > 0 && console.log("hello");
  // Handlers for navigation
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full h-[calc(100vh-4rem)] bg-linear-to-r from-sky-500 to-indigo-600">
      <div className="max-w-7xl mx-auto h-full px-6">
        <div className="grid grid-cols-6 h-full gap-6 items-center">
          {/* Left: text area */}
          <div className="col-span-6 md:col-span-4 flex flex-col justify-center gap-6">
            <div className="bg-white/6 p-6 rounded-2xl backdrop-blur-sm max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Build faster, deliver better
              </h2>
              <p className="mt-3 text-lg text-white/90">
                A minimal product showcase powered by your product images.
                Responsive layout with a clean grid — left side shows content,
                right side shows images.
              </p>
              <div className="mt-6 flex gap-4">
                <button className="px-5 py-2 rounded-lg bg-white text-indigo-600 font-semibold">
                  Get started
                </button>
                <button className="px-5 py-2 rounded-lg bg-white/20 text-white border border-white/30">
                  Learn more
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-md bg-white/10 text-white">
                Responsive
              </span>
              <span className="px-3 py-1 rounded-md bg-white/10 text-white">
                Tailwind
              </span>
              <span className="px-3 py-1 rounded-md bg-white/10 text-white">
                Manual Slider
              </span>
              <span className="px-3 py-1 rounded-md bg-white/10 text-white">
                Grid layout
              </span>
            </div>
          </div>

          {/* Right: image area */}
          <div className="col-span-6 md:col-span-2 relative">
            <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
              {sliderImages?.[currentIndex] ? (
                <img
                  src={sliderImages[currentIndex]}
                  alt={`Product ${currentIndex + 1}`}
                  className="object-cover w-full h-full transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span>No image</span>
                </div>
              )}

              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-linear-to-r from-sky-500 to-indigo-500 hover:opacity-90 text-white rounded-full p-2 shadow-lg backdrop-blur-sm border border-white/20 transition cursor-pointer"
              >
                ‹
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-linear-to-r from-indigo-500 to-sky-500 hover:opacity-90 text-white rounded-full p-2 shadow-lg backdrop-blur-sm border border-white/20 transition cursor-pointer"
              >
                ›
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {sliderImages?.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
