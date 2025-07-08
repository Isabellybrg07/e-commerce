import Car from "../../components/Car"
import Input from "../../components/Input"



const Buy = () => {
  return (
    <div className="user-form">
      <div className="buyl1">
        <div className="buyl2">
          <h2>Dados <br />  da <br /> Compra</h2>
        </div >


        <div className="buy3">
          <Car product={{
            title: "raglã",
            imageSrc: "/public/images/vestidoragla.jpg",
            price: 15
          }}>

          </Car>


        </div>
        <div className="check-buy">
          <h3>Formas de pagamento</h3>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
              <label className="form-check-label" htmlFor="defaultCheck1">
                Default checkbox
              </label>
            </input>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2">
              <label className="form-check-label" htmlFor="defaultCheck2">
                Disabled checkbox
              </label>
            </input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy