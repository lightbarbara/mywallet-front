import { MainContainer, NewEntry } from "../styles/MainContainer"
import logout from '../assets/logout.png'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import { useEffect, useState } from "react"
import axios from "axios"
import { urlBack } from "../constants/urls"
import { Link, useNavigate } from "react-router-dom"
import TransactionContainer from "../styles/TransactionContainer"

function Transaction({ date, description, value, type }) {
    return (
        <TransactionContainer type={type}>
            <span>
                <span>{date}</span>
                <span>{description}</span>
            </span>
            <span>{value}</span>
        </TransactionContainer>
    )
}

export default function Transactions() {

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    const name = localStorage.getItem('name')

    const [transactions, setTransactions] = useState([])

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    async function logoutFunc() {

        try {
            await axios.delete(urlBack, config)
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            navigate('/')
        } catch (err) {
            console.log(err)
        }
        
    }

    useEffect(() => async function() {

        try {

            const res = await axios.get(`${urlBack}transactions`, config)
            setTransactions(res.data)
            console.log(res.data)

        } catch (err) {
            console.log(err)
        }

    }, [config])

    return (
        <MainContainer transactions={transactions}>
            <div>
                <p>Olá, {name}</p>
                <img alt='log out' src={logout} onClick={logoutFunc} />
            </div>
            <div>
                {transactions.length > 0 ? transactions.map(t =>
                    <Transaction date={t.date} description={t.description} value={t.value} type={t.type} />
                ) : <p>Não há registros de entrada ou saída</p>}
            </div>
            <div>
                <Link to='/new-transaction/entrada'>
                    <NewEntry>
                        <img alt='plus' src={plus} />
                        <p>Nova Entrada</p>
                    </NewEntry>
                </Link>
                <Link to='/new-transaction/saida'>
                    <NewEntry>
                        <img alt='minus' src={minus} />
                        <p>Nova Saída</p>
                    </NewEntry>
                </Link>
            </div>
        </MainContainer>
    )
}