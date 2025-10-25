import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isOpen, setIsOpen] = useState(true); // overlay visibility
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || "Login failed. Please try again");
        return;
      }
      setFormData({ email: "", password: "" });
      navigate("/");
      console.log("signup success", data);
    } catch (error) {
      console.error(error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ESC key closes modal and goes home
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        navigate("/");
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [navigate]);

  // Click on backdrop = go home
  const handleBackdropClick = () => {
    setIsOpen(false);
    navigate("/");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30 transition-all duration-300"
      onClick={handleBackdropClick}
    >
      {/* Login Box */}
      <div
        className="relative z-10 bg-white/95 rounded-2xl shadow-2xl p-6 w-full max-w-xs mx-4 animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 py-1 text-bg-btn">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="mt-6">
          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-1.5 border border-gray-300 rounded-xl shadow-sm outline-none transition-all duration-300 text-gray-700 placeholder:text-sm"
              placeholder="anis@gmail.com"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-1.5 border border-gray-300 rounded-xl shadow-sm outline-none transition-all duration-300 text-gray-700 placeholder:text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group w-full bg-bg-btn text-white py-2 px-4 rounded-xl font-medium hover:bg-bg-btn-hover transition-colors flex items-center justify-center cursor-pointer overflow-hidden"
          >
            Login
            <span className="ml-2 transform transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0 ">
              <FaArrowRight />
            </span>
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6 pt-6 flex items-center gap-1 text-sm">
          <p>Create an Account?</p>
          <Link
            to="/signup"
            className="text-indigo-600 font-medium hover:underline cursor-pointer"
          >
            Signup
          </Link>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          By signing up, you agree to our{" "}
          <a href="#" className="text-blue-600 font-medium">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 font-medium">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
