import styled from "styled-components";

const TotalContainer = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
bottom: 17.5vh;
left: 10vw;
width: 80vw;
margin: 0 auto;

span:nth-child(1) {
    font-weight: 700
}

span:nth-child(2) {
    color: ${props => props.tipo === 'saida' ? '#C70000' : '#03AC00'}
}
`

export default TotalContainer