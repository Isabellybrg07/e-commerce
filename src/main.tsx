import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import User from "./pages/User";
import Adress from "./pages/Adress";
import Buy from "./pages/Buy";
import Card from "./pages/Card";
import Product from "./pages/Product"
import AuthProvider from "./contexts/AuthContext";
import AdminLayout from "./layouts/AdminLayout";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="user" element={<User />} />
          <Route path="adress" element={<Adress/>} />
          <Route path="buy" element={<Buy/>} />
          <Route path="card" element={<Card/>} />
          <Route path="product" element={<Product />} />
        </Route>

        
        <Route path="iaki-adm" element={<AdminLayout/>}/>
        

        <Route index element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);