import { Outlet } from "react-router";
import "./index.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <div className="header">
        <img src={"/public/images/logo.png"} alt="Logo Isabelly-Kids" />
        <h1>Isabelly Kids</h1>
       
      </div>
      <div className="body1">
       
      

          <div> <Outlet /></div>
         
        </div>

      </div>
  
  );
};

export default AppLayout;