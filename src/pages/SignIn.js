import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ContainerAuth from "../styles/ContainerAuth"
import Form from "../styles/Form"

export default function SignIn() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function sendForm(e) {
        e.preventDefault()
        navigate('/home')
    }

    return (
        <ContainerAuth>
            <h1>MyWallet</h1>
            <Form onSubmit={sendForm}>
                <input type='email' placeholder='E-mail' value={form.email} name='email' required onChange={handleForm} />
                <input type='password' placeholder='Senha' value={form.password} name='password' required onChange={handleForm} />
                <button type='submit'>Entrar</button>
            </Form>
            <Link to='/sign-up'><p>Primeira vez? Cadastre-se!</p></Link>
        </ContainerAuth>
    )
}