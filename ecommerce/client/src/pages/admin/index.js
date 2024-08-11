import React from "react";
import { Navigate, Link, Outlet, NavLink } from "react-router-dom";
import "./styles.css";
import { useAuth } from "../../contexts/AuthContext";

function Admin() {
  const { user } = useAuth();
  return (
    <>
      {user?.role !== "admin" && <Navigate to={"/"} replace={true} />}

      <nav>
        <ul className="admin-menu">
          <li>
            <Link to={"/admin"}>Home</Link>
          </li>
          <li>
            <Link to={"/admin/home/orders"}>Orders</Link>
          </li>
          <li>
            <Link to={"/admin/products"}>Products</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Admin;
