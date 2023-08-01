import { Form } from "../../components/Form"

export const RegisterPage = ({setUser}) => {
    return(
        <main>
            Register Page
            <Form setUser={setUser} />
        </main>
    )
}