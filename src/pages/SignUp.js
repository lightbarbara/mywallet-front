import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { urlBack } from "../constants/urls"
import ContainerAuth from "../styles/ContainerAuth"
import Form from "../styles/Form"

export default function SignUp() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function sendForm(e) {
        e.preventDefault()
        if (form.password !== passwordConfirmation) {
            alert('As senhas precisam ser iguais')
            return
        }

        try {

            await axios.post(`${urlBack}sign-up`, form)
            navigate('/')

        } catch (err) {
            alert(err.response.data.message)
        }

    }

    return (
        <ContainerAuth>
            <h1>MyWallet</h1>
            <Form onSubmit={sendForm}>
                <input type='text' placeholder='Nome' value={form.name} name='name' required onChange={handleForm} />
                <input type='email' placeholder='E-mail' value={form.email} name='email' required onChange={handleForm} />
                <input type='password' placeholder='Senha' value={form.password} name='password' required onChange={handleForm} />
                <input type='password' placeholder='Confirme a senha' value={passwordConfirmation} required onChange={(e) => setPasswordConfirmation(e.target.value)} />
                <button type='submit'>Cadastrar</button>
            </Form>
            <Link to='/'><p>Já tem uma conta? Entre agora!</p></Link>
        </ContainerAuth>
    )
}