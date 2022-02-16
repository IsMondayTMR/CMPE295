import styled from "styled-components";
import { Link } from "react-router-dom";


export const Button = styled.button`
    display: inline-block;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #28a2de;
    color: white;
    border-radius: 5px;
    font-size: 20px;
    &:hover{
        background-color: #227299;
    }
`
export const DropDownContent = styled.div`
    display: none;
    background-color: gray;
    position: absolute;
    width: 200px;
    background-color: #28a2de;
    border-radius: 5px;
    z-index: 50;
`

export const Background = styled.div`
    width: 200px;
    height: 50px;

    &:hover {
        display: block;
    }
    &:hover ${DropDownContent}{
        display: block;
    }
    
`
export const List = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const LinkItem = styled(Link)`
    color: white;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    height: 100%;
    padding: 10px 5px;
    &:hover{
        background-color: #227299;
    }
`

export const ItemBtn = styled.button`
    background-color: transparent;
    font-size: 18px;
    color: white;
    border: none;
    padding: 10px 5px;
    &:hover{
        background-color: #227299;
        border-radius: 0 0 5px 5px;
    }
`