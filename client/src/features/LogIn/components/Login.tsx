import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import authApi from "../../../api/authApi";
import { useMutation } from "@tanstack/react-query";
import { User } from "../../../types/types";

type LoginDto ={
  email: string;
  password: string;
}
const Login = () => {

  const [email,setEmail]= useState('');
  const [password, setPassword]= useState('');
  const[user, setUser] = useLocalStorage('user', '');
  const navigate = useNavigate();
  const mutationFn = async ({email, password}: LoginDto) => authApi(email, password);

  const mutation = useMutation<User, Error, LoginDto>({
    mutationFn,
    onSuccess: (data) => {
      setUser(data)
      navigate('/')
    },
    onError: (error) => console.log('There has been an error',error)
  })

  const onChangeEmail= (e:ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value);
  }

  const onChangePassword= (e: ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value);
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    mutation.mutate({email,password})
  }

  return (
  <>
  <div>
    <form action="#" onSubmit={onSubmit} method="POST">
      <div>
        <label htmlFor="email" >Correo Electrónico</label>
        <input id="email" type="email" name="email" onChange={onChangeEmail} value={email} required  />
        
        <label htmlFor="password" >Contraseña</label>
        <input type="password" id="password" name="password" value={password} onChange={onChangePassword} required />

        <button type="submit">Iniciar Sesión</button>
      </div>

    </form>
  </div>
  </>
  )
}

export default Login;