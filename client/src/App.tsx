import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";
import ShopLayout from "./components/shop/ShopLayout";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Home from "./pages/shop/Home";
import Listing from "./pages/shop/Listing";
import Account from "./pages/shop/Account";
import Checkout from "./pages/shop/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
      </Route>

      <Route path="shop" element={<ShopLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="listing" element={<Listing />} />
        <Route path="account" element={<Account />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
