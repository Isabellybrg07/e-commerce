import Input from "../../components/Input";
import Button from "../../components/Button"
import "./index.css"

const Card = () => {
  return (
    <div className="card-form">
       <div className="cardl1">
         <div className="cardl2">
            <h2>Dados <br />  do <br /> Cartão</h2>
          </div >
      
      <label htmlFor="" className="">Nome do cartão</label>
       <Input className="input-2-columns" placeholder="" />
       <label htmlFor="Senha">CVV</label>
   <Input className="input-2-columns" placeholder="" />
        <label htmlFor="">Data de nascimento</label>

       <Input className="date" type="date" placeholder="dd/mm/aa"/>
    
        <label htmlFor="Senha">Núm. do cartão</label>
       <Input className="input-2-columns" placeholder="" />
        <label htmlFor="Senha">CPF</label>
       <Input className="input-2-columns" placeholder="***.***.***-**" />


  <Button> Salvar</Button>
   <Button> Adicionar</Button>
</div>
    </div>  
    
  )
};


export default Card