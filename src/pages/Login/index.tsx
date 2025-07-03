import Input from "../../components/Input";
import Button from "../../components/Button"

const Login = () => {
  return (
    <div className="login-form">
       <div className="l1">
      <h1>Bem vindos!</h1>
      <label htmlFor="" className="">Email</label>
       <Input className="input-2-columns" placeholder="User@gmail.com" />
       <label htmlFor="Senha">Senha</label>
       <Input className="input-2-columns" placeholder="*******" />
       <a href="#" className="link-danger  LinkSenha">Esqueci minha senha</a>
     
  <Button> Entrar</Button>
   <Button> Criar conta</Button>
</div>
    </div>  
    
  )
};


export default Login