import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navigation/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Admin from "./pages/Admin";
import Orders from "./pages/dashboard/Orders";
import Customers from "./pages/dashboard/Customers";
import Products from "./pages/dashboard/Products";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />

        {/* Dashboard Page */}
        <Route path="/" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
