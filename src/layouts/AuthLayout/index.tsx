import { Outlet } from "react-router";

import "./index.css";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div>
      <img src={"/public/images/logo.png"} alt="Logo Isabelly-Kids" />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;