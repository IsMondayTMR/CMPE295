import styled from "styled-components"
import { Link } from "react-router-dom"

export const Background = styled.div`
    height: 50px;
    background-color: black;
    display: ${props => props.hide ? "none" : "flex"};
    justify-content: space-around;
    align-items: center;

`
export const Container = styled.div`
    width:80%;
    margin: 0 auto;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const RouteLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 10px;
    font-size: 20px;
    &:hover{
        color: grey;
        border-bottom: 1px solid grey;
    }
`