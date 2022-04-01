import styled from "styled-components";
import { Link } from "react-router-dom";
export const Background = styled.div`
    margin: 50px 0;
    width: 100%;
    text-align: center;
`

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    column-gap: 30px;
    row-gap: 20px;

`

export const RouteLink = styled(Link)`
    text-decoration: none;
    
    color: black;
    width: 100%;
`
export const Card = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    border: 1px solid #b0b0b0;
    width: 250px;
    height: 250px;
    margin: 0 auto 30px auto;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #e0e0e0;
    &:hover{
        background-color: #f7f7f7;
    }
`

export const Img = styled.img`
    width: 250px;
    height: 175px;
    object-fit: cover;
`
export const Title = styled.h2`
    margin: 0 10px;
    font-size: 30px;
`

export const Description = styled.p`
    margin: 0;
    font-size: 21px;
    
`

export const Donate = styled.p`
    display: ${props => props.hide ? props.hide : "none"};
    font-size: 15px;
    padding: 2px ;
    border: 1px solid #cccecf;
    border-radius: 5px;
    background-color: #258fc4;
    color: white;
    font-weight: bold;
    margin: 0;
`

export const InforContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px 10px;
`
export const InvitStarter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    
`

export const Username = styled(Link)`
    text-decoration: none;
    margin: 0;
    color: black;
    font-size: 18px;
    &:hover{
        text-decoration: underline;
        color: red;
    }
`

export const OfferDialog = styled.p`
    margin: 0;
    font-size: 20px;
`
export const ButtonContainer = styled.div`

`

export const Button = styled.button`

`
export const NoResultText = styled.p`
    color: #969696;
    margin: 0 auto;
`

export const Fav = styled.div`
    display: ${(props) => props.hide ? "block" : "none"};
    position: absolute;
    right: 10px;
    top: 5px;
    color: pink;

    &:hover{
        color: #e8a2df;
    }
`

export const FavFill = styled.div`
    display: ${(props) => props.hide ? "block" : "none"};
    position: absolute;
    right: 10px;
    top: 5px;
    color: pink;

    &:hover{
        color: #e8a2df;
    }
`