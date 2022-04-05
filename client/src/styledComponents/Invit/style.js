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
    height: 300px;
    width: ${(props) => props.width ? props.width : "100%"};
    margin: 20px auto;
`

export const StarterContainer = styled.div`
    background-color: #ebebeb;
    height: 25%;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    justify-content: space-between;
    border-radius: 0.75rem 0.75rem 0 0;
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
    font-size: 20px;
    margin: 0;
`

export const Username = styled.p`
    margin: 5px;
`
export const UserId = styled.p`
    font-size: 15px;
    margin: 5px;
`
export const DetailContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 75%;
`
export const ItemContainer = styled.div`
    display: flex;
`

export const ItemInfor = styled.div`
    margin: 0 20px;
`
export const ItemTitle = styled.h1`
    font-size: 25px;
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
export const TabButton = styled.button`
    margin: 0;
    height: 45px;
    margin-top: 20px;
    color: white;
    font-weight: bolder;
    background-color: #1f9aff;
    border-radius: 5px 5px 0 0;
    border: 1px solid gray;
    border-bottom:none ;
    margin-right: 5px;

    &:hover{
        background-color: #265ca3;
    }
`

export const TabContainer = styled.div`
    margin: 0;
`

export const Break = styled.hr`
    margin: 0;

`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`