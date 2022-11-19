import { Link } from "react-router-dom"
import ContainerAuth from "../styles/ContainerAuth"
import Form from "../styles/Form"

export default function SignUp() {

    function sendForm() {
        return ''
    }

    return (
        <ContainerAuth>
            <h1>MyWallet</h1>
            <Form onSubmit={sendForm}>
                <input type='text' placeholder='Nome' />
                <input type='email' placeholder='E-mail' />
                <input type='password' placeholder='Senha' />
                <input type='password' placeholder='Confirme a senha' />
                <button type='submit'>Cadastrar</button>
            </Form>
            <Link to='/'><p>Já tem uma conta? Entre agora!</p></Link>
        </ContainerAuth>
    )
}