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
import UnAuthPage from "./pages/unauthPage/UnAuthPage";
import CheckAuth from "./components/common/CheckAuth";
import { useAppDispatch, useAppSelector } from "./store/store";
import { useEffect } from "react";
import { checkAuth } from "./store/authSlice";
import { Skeleton } from "./components/ui/skeleton";

const App = () => {
  const { isAuthenticated, user, isLoading } = useAppSelector((state) => state.auth);
   const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;
  return (
    <Routes>
      <Route
        path="auth"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route
        path="admin"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
      </Route>

      <Route
        path="shop"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShopLayout />
          </CheckAuth>
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="listing" element={<Listing />} />
        <Route path="account" element={<Account />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="unauth-page" element={<UnAuthPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
