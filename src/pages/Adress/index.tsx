import Input from "../../components/Input";
import Button from "../../components/Button"

const Adress = () => {
  return (
  



    <div className="adress-form">
       <div className="adressl1">
      <div className="adressl2">
            <h2>Dados <br />  do <br /> Endereço</h2>
          </div >
          <label htmlFor="">Núm. para contato</label>
      <Input className="input-2-columns"  placeholder="xx xxxxx-xxxx" />
          <label htmlFor="">CEP</label>
      
      <Input className="input-2-columns" placeholder="XXXXX-XXX" />
          <label htmlFor="">Cidade</label>

       <Input placeholder="Ex.: Fortaleza" />
          <label htmlFor="">Estado</label>
       <Input className="input-2-columns" placeholder="Ex.: CE" />

         <label htmlFor="">Bairro</label>

       <Input className="input-2-columns" placeholder="" />


<label htmlFor="">Rua</label>
       <Input className="input-2-columns" placeholder="" />
          <label htmlFor="">Núm.</label>

       <Input className="input-2-columns" placeholder="" />
       
  <Button > Adicionar</Button>
  <Button> Próxima</Button>
</div>

    </div>
    
  )
};


export default Adress