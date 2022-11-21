import styled from "styled-components";

const TransactionContainer = styled.div`
font-family: 'Raleway', sans-serif;
display: flex;
width: 80vw;
height: 4vh;
justify-content: space-between;
align-items: center;
font-size: 16px;

& > span:nth-child(1) {
    & > span:nth-child(1) {
        color: #C6C6C6;
    }

    & > span:nth-child(2) {
        color: #000000;
    }
}

& > span:nth-child(2) {
        color: ${props => props.type === 'entrada' ? '#03AC00' : '#C70000'}
    }

`

export default TransactionContainer