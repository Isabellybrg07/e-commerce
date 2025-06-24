import { Outlet } from "react-router";

import "./index.css";

const AuthLayout = () => {
  return (
        <div className="auth-layout">
    <div className="header">
      <img src={"/public/images/logo.png"} alt="Logo Isabelly-Kids" />
       <h1>Isabelly Kids</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;