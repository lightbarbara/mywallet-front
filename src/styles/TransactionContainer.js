import styled from "styled-components";

const TransactionContainer = styled.div`
font-family: 'Raleway', sans-serif;
display: flex;
width: 80vw;
min-height: 4vh;
justify-content: space-between;
align-items: center;
font-size: 16px;
margin: 0 auto;

& > span:nth-child(1) {
    display: flex;
    gap: 3vw;

    & > span:nth-child(1) {
        color: #C6C6C6;
    }

    & > span:nth-child(2) {
        color: #000000;
    }
}

& > span:nth-child(2) {
    display: flex;
    gap: 3vw;

    & > span:nth-child(1) {
        color: ${props => props.type === 'entrada' ? '#03AC00' : '#C70000'};
    }

    & > span:nth-child(2) {
        color: #C6C6C6;
        cursor: pointer;
    }
}

`

export default TransactionContainer