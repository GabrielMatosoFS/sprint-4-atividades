import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api";

export const PostPage = () => {
    const [post, setPost] = useState(null);

    const navigate = useNavigate();

    const { id } = useParams();
    
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await api.get(`/news/${id}`);
                setPost(data);
            } catch (error) {
                console.log(error);
                navigate("/404");
            }
        }
        getPost();
    }, [])

    return(
        <main>
            {post ? (
                <>
                    <span>{post.category}</span>
                    <h1>{post.title}</h1>
                    <span>{post.author}</span>
                    <p>{post.content}</p>
                </>
            ) : null}
        </main>
    )
}