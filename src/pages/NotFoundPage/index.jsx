import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return(
        <main>
            <h1>404: Página não encontrada</h1>
            <Link to="/">Voltar ao início</Link>
        </main>
    )
}