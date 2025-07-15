import Input from "../../components/Input";
import Button from "../../components/Button"
import { FormEventHandler } from "react";
import { useNavigate } from "react-router";

const User = () => {
const navigate = useNavigate()


   const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault()
      const values = new FormData(event.target as HTMLFormElement)
      const body = {
         birthdate: new Date(values.get('birthdate') as string).toISOString(),
         name: values.get('name'),
         email: values.get('email'),
         password: values.get('password'),
         user: values.get('user'),
         number: values.get('number')


      }
   const request = await fetch('http://localhost:8000/auth/user', {
         method: 'post',
         body: JSON.stringify(body),
         headers: {
            "Content-Type": "application/json"
         }
      });
      
if(!request.ok){
   return;
}

navigate('/auth/login')

   }

   return (

      <form onSubmit={onSubmit}>
         <div className="user-form">
            <div className="userl1">
               <div className="userl2">
                  <h2>Dados <br />  do <br /> Usuário</h2>
               </div >
               <label htmlFor="">Nome de usuário</label>
               <Input className="input-2-columns" placeholder="Usuário" type="user" name="user" />
               <label htmlFor="">Nome Completo</label>

               <Input className="input-2-columns" placeholder="Nome completo" name="name" />

               <label htmlFor="">Celular</label>
               <Input className="input-2-columns" placeholder="xx xxxxx-xxxx" name="number"/>

               <label htmlFor="">Data de nascimento</label>
               <Input className="date" type="date" required placeholder="dd/mm/aa"  name="birthdate" />


               <label htmlFor="">Email</label>
               <Input className="input-2-columns" placeholder="User@gmail.com" type="email" name="email" />
               <label htmlFor="">Senha</label>

               <Input className="input-2-columns" placeholder="*******" type="password" name="password" />
               <label htmlFor="">Confirmar senha</label>

               <Input className="input-2-columns" placeholder=" ********" type="password" name="password" />
               <Button type="submit">Salvar dados</Button>
               <Button> Entrar</Button>
            </div>

         </div>
      </form>
   )

};


export default User