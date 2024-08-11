import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Admin from "./pages/admin";
import AdminProducts from "./pages/admin/Products";
import NewProduct from "./pages/admin/Products/new";
import Orders from "./pages/admin/Home/Orders";
import Home from "./pages/admin/Home";
import AdminProductDetail from "./pages/admin/ProductDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/product/:product_id" Component={ProductDetail} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/basket" element={<Basket />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<Admin />} admin={true} />
            </Route>
            <Route path="*" element={<Error404 />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/admin" element={<Admin />}>
                <Route path="home" element={<Home />} />
                <Route path="home/orders" element={<Orders />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="products/new" element={<NewProduct />} />

                <Route
                  path="product/:product_id"
                  Component={AdminProductDetail}
                />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
