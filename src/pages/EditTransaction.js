import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Form from "../styles/Form"
import NewTransactionContainer from "../styles/NewTransactionContainer"
import axios from 'axios'
import { urlBack } from "../constants/urls"

export default function EditTransaction() {

    const { type, id } = useParams()

    const token = localStorage.getItem('token')

    const navigate = useNavigate()

    const [form, setForm] = useState({
        value: '',
        description: '',
        type
    })

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function sendForm(e) {
        e.preventDefault()

        try {

            await axios.put(`${urlBack}transaction/${id}`, form, config)

        } catch (err) {
            alert(err.response.data.message)
            console.log(err)
        }
        navigate('/transactions')
    }

    return (
        <NewTransactionContainer>
            <div>
                <p>Editar {type}</p>
            </div>
            <Form onSubmit={sendForm}>
                <input type='number' placeholder='Valor' value={form.value} name='value' required onChange={handleForm} />
                <input type='text' placeholder='Descrição' value={form.description} name='description' required onChange={handleForm} />
                <button type='submit'>Salvar {type}</button>
            </Form>
        </NewTransactionContainer>
    )
}