import { MainContainer, NewEntry } from "../styles/MainContainer"
import logout from '../assets/logout.png'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import { useEffect, useState } from "react"
import axios from "axios"
import { urlBack } from "../constants/urls"
import { Link, useNavigate } from "react-router-dom"
import TransactionContainer from "../styles/TransactionContainer"
import TotalContainer from "../styles/TotalContainer"

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

function Total({ transactions }) {

    const newTransactions = transactions.map(t => t.type === 'saida' ? t.value = Number(t.value) * (-1) : t.value = Number(t.value))
    let total = newTransactions.reduce((total, currentElement) => total + currentElement)
    let tipo
    if (total < 0) {
        total = total * (-1)
        tipo = 'saida'
    }

    return (
        <TotalContainer tipo={tipo}>
            <span>SALDO</span>
            <span>{total}</span>
        </TotalContainer>
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

    useEffect(() => {

        const getTransactions = async () => {
            try {

                const res = await axios.get(`${urlBack}transactions`, config)
                setTransactions(res.data)

            } catch (err) {
                console.log(err)
            }
        }

        getTransactions()

    }, [])

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
                {transactions.length > 0 ? <Total transactions={transactions} /> : ''}
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