import Input from "../../components/Input";
import Button from "../../components/Button"
import { FormEventHandler, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import "./index.css"

const Login = () => {

   const navigate = useNavigate()

   const {

      signIn
   } = useContext(AuthContext)


   const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault()
      const values = new FormData(event.target as HTMLFormElement)
      const body = {

         email: values.get('email') as string,
         password: values.get('password') as string,



      }

      await signIn(body)
      navigate('/')



   }







   return (

      <form onSubmit={onSubmit}>
         <div className="login-form">
            <div className="l1">
               <h1>Bem vindos!</h1>
               <label htmlFor="" className="">Email</label>
               <Input className="input-2-columns" placeholder="User@gmail.com" name="email" type="email" />




               <label htmlFor="Senha">Senha</label>
               <Input className="input-2-columns" placeholder="*******" name="password" type="password" />



               <a href="#" className="link-danger  LinkSenha">Esqueci minha senha</a>

               <Button type="submit"> Entrar</Button>
               <Button> Criar conta</Button>
            </div>
         </div>
      </form>
   )
};


export default Login