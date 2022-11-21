import styled from "styled-components";

const NewTransactionContainer = styled.div`
font-family: 'Raleway', sans-serif;
display: flex;
flex-direction: column;
gap: 2vh;
align-items: center;
justify-content: center;

& > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 85vw;
    margin: 0 auto;

    p {
        font-size: 26px;
        font-weight: 700;
        color: white;
    }
}
`

export default NewTransactionContainer