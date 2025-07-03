import Input from "../../components/Input";
import Button from "../../components/Button"

const User = () => {
  return (
  



    <div className="user-form">
       <div className="userl1">
      <div className="userl2">
            <h2>Dados <br />  do <br /> Usuário</h2>
          </div >
      <Input className="input-2-columns"  placeholder="Usuário" />
      <Input className="input-2-columns" placeholder="Nome completo" />

       <Input placeholder="Celular" />
       <Input className="date" type="date" placeholder="Data de Nascimento"/>



       <Input className="input-2-columns" placeholder="E-mail" />
       <Input className="input-2-columns" placeholder="Senha" />
       <Input className="input-2-columns" placeholder=" Confirmar senha" />
  <Button >Salvar dados</Button>
  <Button> Próxima</Button>
</div>

    </div>
    
  )
};


export default User