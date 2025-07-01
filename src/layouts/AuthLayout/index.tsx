import { Outlet } from "react-router";

import "./index.css";
import Button from "../../components/Button";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="header">
        <img src={"/public/images/logo.png"} alt="Logo Isabelly-Kids" />
        <h1>Isabelly Kids</h1>
      </div>
      <div className="body1">
        <div className="l1">
          <div className="l2">
            <h2>Dados <br />  do <br /> Usuário</h2>
          </div>
          <Outlet />
        </div>
<div>
 <Button/>

</div>
      </div>
    </div>
  );
};

export default AuthLayout;