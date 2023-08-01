import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

export const HomePage = () => {
   const [postList, setPostList] = useState([]);

   useEffect(() => {
      const getPosts = async () => {
         try {
            const { data } = await api.get("/news");
            setPostList(data);
         } catch (error) {
            console.log(error);
         }
      };
      getPosts();
   }, []);

   return (
      <main>
         <ul>
            {postList.map((post) => (
               <li key={post.id}>
                  <h3>{post.title}</h3>
                  <Link to={`/post/${post.id}`}>Ler mais</Link>
               </li>
            ))}
         </ul>
      </main>
   );
};
