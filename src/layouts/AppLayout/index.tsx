import { Outlet } from "react-router";
import "./index.css";
import Card from "../../components/Card";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <div className="header">



        <img src={"/public/images/logo.png"} alt="Logo Isabelly-Kids" />
        <h1>Isabelly Kids</h1>




        <button className="bi bi-cart2  services rounded-circle cart"></button>
        <button className="services rounded-circle"></button>





      </div>
      <div className="body1">
        <div> <Outlet /></div>
        <div className="topic">
          <a href="#vestidos" className="topic">Vestidos</a>
          <a href="#macaquinhos" className="topic">Macaquinhos</a>
          <a href="#conjuntos" className="topic">Conjuntos</a>
          <a href="#longos" className="topic">Longos</a>
        </div>

        <div id="vestidos">
          <h1>Vestidos</h1>
          <div className="cards">

            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido aba",
                imageSrc: "/public/images/aba.jpeg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>
          </div>
        </div>



        <div id="macaquinhos">
          <h1>Macaquinhos</h1>
          <div className="cards">

            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido aba",
                imageSrc: "/public/images/aba.jpeg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>
          </div>
        </div>

        <div id="conjuntos">
          <h1>Conjuntos</h1>
          <div className="cards">

            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido aba",
                imageSrc: "/public/images/aba.jpeg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>
          </div>
        </div>


       <div id="longos">
          <h1>Longos</h1>
          <div className="cards">

            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido aba",
                imageSrc: "/public/images/aba.jpeg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>


            <button>
              <Card product={{
                title: "Vestido raglã",
                imageSrc: "/public/images/vestidoragla.jpg",
                price: 15.00
              }} ></Card>
            </button>
          </div>
        </div>


      </div>



    </div>

  );
};

export default AppLayout;