import { useState } from "react";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";

export const Form = ({setUser}) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const submit = (e) => {
    e.preventDefault();
    setUser({ name, email, password});
    navigate("/");
   }

   return (
      <form onSubmit={submit}>
         <Input
            id="name"
            label="Nome:"
            placeholder="Seu nome"
            type="text"
            value={name}
            setValue={setName}
         />

         <Input
            id="email"
            label="E-mail:"
            placeholder="Seu e-mail"
            type="email"
            value={email}
            setValue={setEmail}
         />

         <Input
            id="password"
            label="Senha:"
            placeholder="Crie sua senha"
            type="password"
            value={password}
            setValue={setPassword}
         />
         <button type="submit">Cadastre-se</button>
      </form>
   );
};
