import Input from "../../components/Input";
import Button from "../../components/Button"

const Login = () => {
  return (
    <div className="login-form">
      <Input className="input-2-columns"  placeholder="Usuário" />
      <Input className="input-2-columns" placeholder="Nome completo" />

       <Input placeholder="Celular" />
       <Input type="date" placeholder="Data de Nascimento"/>



       <Input className="input-2-columns" placeholder="E-mail" />
       <Input className="input-2-columns" placeholder="Senha" />
       <Input className="input-2-columns" placeholder=" Confirmar senha" />
  <Button >Salvar dados</Button>
  <Button> Próxima</Button>

    </div>
    
  )
};


export default Login