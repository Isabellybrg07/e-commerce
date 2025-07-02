import Input from "../../components/Input";
import Button from "../../components/Button"

const Login = () => {
  return (
    <div className="login-form">
       <Input className="input-2-columns" placeholder="E-mail" />
       <Input className="input-2-columns" placeholder="Senha" />
     
  <Button> Entrar</Button>

    </div>
    
  )
};


export default Login