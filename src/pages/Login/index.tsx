import Input from "../../components/Input";
import Button from "../../components/Button"

const Login = () => {
  return (
    <div className="login-form">
       <div className="l1">
      <h1>Bem vindos!</h1>
       <Input className="input-2-columns" placeholder="E-mail" />
       <Input className="input-2-columns" placeholder="Senha" />
       <a href="#" className="link-danger  LinkSenha">Esqueci minha senha</a>
     
  <Button> Entrar</Button>
</div>
    </div>  
    
  )
};


export default Login