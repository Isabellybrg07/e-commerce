import Input from "../../components/Input";
import Button from "../../components/Button"

const User = () => {
  return (
  



    <div className="user-form">
       <div className="userl1">
      <div className="userl2">
            <h2>Dados <br />  do <br /> Usuário</h2>
          </div >
          <label htmlFor="">Nome de usuário</label>
      <Input className="input-2-columns"  placeholder="Usuário" />
          <label htmlFor="">Nome Completo</label>
      
      <Input className="input-2-columns" placeholder="Nome completo" />
          <label htmlFor="">Celular</label>

       <Input placeholder="xx xxxxx-xxxx" />
          <label htmlFor="">Data de nascimento</label>

       <Input className="date" type="date" placeholder="dd/mm/aa"/>


<label htmlFor="">Email</label>
       <Input className="input-2-columns" placeholder="User@gmail.com" />
          <label htmlFor="">Senha</label>

       <Input className="input-2-columns" placeholder="*******" />
          <label htmlFor="">Confirmar senha</label>

       <Input className="input-2-columns" placeholder=" ********" />
  <Button >Salvar dados</Button>
  <Button> Entrar</Button>
</div>

    </div>
    
  )
};


export default User