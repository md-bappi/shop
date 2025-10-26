import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/navigation/Navbar";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/dashboard/Orders";
import DashboardProducts from "./pages/dashboard/DashboardProducts";
import Customers from "./pages/dashboard/Customers";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";
import Products from "./components/ui/Products";
import ProductDetails from "./components/ui/ProductDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />

        {/* Dashboard Page */}
        <Route path="/" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="dashboard-products" element={<DashboardProducts />} />
          <Route path="customers" element={<Customers />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
