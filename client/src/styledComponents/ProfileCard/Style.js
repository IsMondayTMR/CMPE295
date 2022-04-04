import { Link } from "react-router-dom";
import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    
`

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const Card = styled.div`
    border: 1px solid #d4d4d4;
    border-radius: 0.75rem;
    height: 250px;
    width: 100%;
    margin: 20px 0;
`

export const StarterContainer = styled.div`
    background-color: #ebebeb;
    height: 25%;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const RouteLink = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    color : black;
`

export const Starter = styled.div`
    height: 100%;
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`
export const UserInfor = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    font-size: 20px;
    margin: 0;
`

export const Username = styled.p`
    margin: 5px;
    &:hover{
        color: red;
        text-decoration: underline;
    }
`
export const UserId = styled.p`
    font-size: 15px;
    margin: 5px;
`
export const DetailContainer = styled.div`
    display: flex;
    align-items: center;
    height: 75%;
`
export const ItemContainer = styled.div`
    display: flex;
    margin-left: 3rem;

`

export const ItemInfor = styled.div`
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: start;

`
export const ItemTitle = styled.h1`
    font-size: 25px;
    margin: 0;
`

export const ItemDesc = styled.div`
    font-size: 20px;
`
export const Image = styled.img`
    width: 100px;
    object-fit: cover;
`
export const Avatar = styled.img`
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
`

export const Button = styled.button`
    margin: 5px;
    background-color: ${props => props.backgroundColor ? backgroundColor : "#1f9aff"};
    color: white;
    height: 25px;
    width:  80px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: ${props => props.hoverColor ? hoverColor : "#2079a8"};
    }

`

export const ButtonContainer = styled.div`
    display:  flex;
    flex-direction: ${(props) => props.displayDirection ? props.displayDirection : "column"};
    margin: 0 auto;
`

export const NoResultText = styled.p`
    color: #969696;
    margin: 0 auto;
`

export const Title = styled.h2`
    margin: 0;
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
    width: 48px;
`

export const InforContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px 10px;
`