import styled from "styled-components";

const MainContainer = styled.div`
font-family: 'Raleway', sans-serif;
display: flex;
flex-direction: column;
gap: 2vh;
position: relative;

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

    img {
        display: flex;
        height: 3vh;
        cursor: pointer;
    }
}

& > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 85vw;
    height: 70vh;
    margin: 0 auto;
    border-radius: 5px;
    align-items: ${props => props.transactions.length > 0 ? '' : 'center'};
    justify-content: ${props => props.transactions.length > 0 ? '' : 'center'};

    & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    width: 85vw;
    height: 65vh;
    overflow: scroll;

        p {
            font-size: 20px;
            color: #868686;
            width: 50vw;
            text-align: center;
        }
    }

}

& > div:nth-child(3) {
    display: flex;
    height: 14vh;
    width: 85vw;
    margin: 0 auto;
    gap: 5vw;
}
`

const NewEntry = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 13vh;
width: 40vw;
background-color: #A328D6;
border-radius: 5px;
box-sizing: border-box;

img {
    height: 3vh;
    width: 3vh;
    margin: 1vh;
}

p {
    width: 5vh;
    font-size: 17px;
    font-weight: 700;
    margin: 1vh;
    color: white;
}

a {
    text-decoration: none;
}
`

export { MainContainer, NewEntry }