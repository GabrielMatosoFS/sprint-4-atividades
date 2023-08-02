import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { api } from "../services/api";

export const Form = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset
   } = useForm({
      resolver: zodResolver(formSchema),
   });

   const sendEmail = async (formData) => {
      try {
         await api.post("/emails", formData);
         alert("Mensagem enviada com sucesso!");
      } catch (error) {
         console.log(error);
      }
   }

   const submit = (formData) => {
      sendEmail(formData);
      reset();
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <input placeholder="Seu nome" type="text" {...register("name")} />
         {errors.name ? <p>{errors.name.message}</p> : null}
         <input placeholder="Seu e-mail" type="email" {...register("email")} />
         {errors.email ? <p>{errors.email.message}</p> : null}
         <select {...register("departament")}>
            <option value="">Selecione um setor</option>
            <option value="ensino">Ensino</option>
            <option value="design">Design</option>
            <option value="programacao">Programação</option>
         </select>
         {errors.departament ? <p>{errors.departament.message}</p> : null}
         <textarea placeholder="Sua mensagem" {...register("message")}></textarea>
         {errors.message ? <p>{errors.message.message}</p> : null}
         <button type="submit">Enviar mensagem</button>
      </form>
   );
};
