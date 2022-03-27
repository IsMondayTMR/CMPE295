import styled from "styled-components";
import { Link } from "react-router-dom";
export const Background = styled.div`
    margin: 50px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Container = styled.div`

`

export const RouteLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: black;
    width: 100%;
`
export const Card = styled.div`
display: flex;
    border: 1px solid #b0b0b0;
    width: 80%;
    height: 150px;
    margin: 0 auto 30px auto;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #e0e0e0;
    &:hover{
        background-color: #f7f7f7;
    }
`

export const Img = styled.img`
    min-width: 175px;
    max-width: 25%;
    object-fit: cover;
`
export const Title = styled.h2`
    margin: 0;
    font-size: 35px;
`

export const Description = styled.p`
    margin: 0;
    font-size: 21px;
    
`

export const Donate = styled.p`
    display: ${props => props.hide ? props.hide : "none"};
    font-size: 15px;
    padding: 2px;
    border: 1px solid #cccecf;
    border-radius: 5px;
    background-color: #258fc4;
    color: white;
    font-weight: bold;
`

export const InforContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
    width: 100%;
    
`

export const ButtonContainer = styled.div`

`

export const Button = styled.button`

`
export const NoResultText = styled.p`
    color: #969696;
`