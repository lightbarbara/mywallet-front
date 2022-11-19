import { Link } from "react-router-dom"
import ContainerAuth from "../styles/ContainerAuth"
import Form from "../styles/Form"

export default function SignIn() {

    function sendForm() {
        return ''
    }

    return (
        <ContainerAuth>
            <h1>MyWallet</h1>
            <Form onSubmit={sendForm}>
                <input type='email' placeholder='E-mail' />
                <input type='password' placeholder='Senha' />
                <button type='submit'>Entrar</button>
            </Form>
            <Link to='/sign-up'><p>Primeira vez? Cadastre-se!</p></Link>
        </ContainerAuth>
    )
}