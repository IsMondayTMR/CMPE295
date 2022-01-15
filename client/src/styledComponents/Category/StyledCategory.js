import styled from "styled-components";

export const Backgournd = styled.div`
    
`

export const Container = styled.div`
    width: 70%;
    margin: 30px auto 75px auto;
    text-align: center;
    padding: 1% 4%;
`

export const Header = styled.p`
    font-weight: bolder;
    font-size: 35px;
    margin: 0;
`
export const HeaderUnderLine = styled.div`
    background-color: black;
    width: 10%;
    height: 2px;
    margin: 30px auto 75px auto;
`
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(125px, 1fr));
    grid-template-rows: repeat(3,minmax(300px, 1fr));
    row-gap: 2em;
    column-gap: 3em;
`