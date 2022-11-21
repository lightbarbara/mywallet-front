import { MainContainer, NewEntry } from "../styles/MainContainer"
import logout from '../assets/logout.png'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import { useEffect, useState } from "react"
import axios from "axios"
import { urlBack } from "../constants/urls"

export default function Transactions() {

    const token = localStorage.getItem('token')

    const name = localStorage.getItem('name')

    const [transactions, setTransactions] = useState([])

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    useEffect(async () => {

        try {

            const resTransactions = await axios.get(`${urlBack}transactions`, config)
            setTransactions(resTransactions.data)

        } catch (err) {
            console.log(err)
        }

    }, [])

    return (
        <MainContainer transactions={transactions}>
            <div>
                <p>Olá, {name}</p>
                <img alt='log out' src={logout} />
            </div>
            <div>
                {transactions.length > 0 ? '' : <p>Não há registros de entrada ou saída</p>}
            </div>
            <div>
                <NewEntry>
                    <img alt='plus' src={plus} />
                    <p>Nova Entrada</p>
                </NewEntry>
                <NewEntry>
                    <img alt='minus' src={minus} />
                    <p>Nova Saída</p>
                </NewEntry>
            </div>
        </MainContainer>
    )
}