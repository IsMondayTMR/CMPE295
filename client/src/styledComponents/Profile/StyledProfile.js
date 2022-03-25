import styled from "styled-components";
import { Link } from "react-router-dom";
const SubmitBtnNormal = '#006eff'
const SubmitBtnHover = '#00459e'

export const BackGround = styled.div`
    background-color:#f5f5f5;
    padding: 30px 0;
`

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    background-color: white;
    display: flex;
    min-height: 80vh;
    border: 1px solid #ededed;
    border-radius: 5px;
`
export const NavContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #ededed;
    padding-top: 30px;
`

export const RouteLink = styled(Link)`
    text-decoration: none;
    font-size: 25px;
    margin: 10px auto;
    color: #454545;
    border-bottom: ${({ active }) => active ? "1px solid black" : "1px solid white"};
    &:hover{
        border-bottom: 1px solid black;
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    text-align: center;
`

export const EditButton = styled.button`
    height: 45px;
    width: 200px;
    margin: 20px auto;
    background-color: ${SubmitBtnNormal};
    font-size: 18px;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: ${SubmitBtnHover};
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`

export const ImageContainer = styled.div`
    
    width: 200px;
    height: 200px;

    margin: 20px auto;
`
export const UserImage = styled.img`
    border-radius: 50%;
    width: 100%;
    object-fit: cover;

`

export const InputGroup = styled.div`
    display: flex;
    margin: 10px auto;
`
export const Input = styled.input`
    width: ${props => props.width ? props.width : "400px"};
    height: 40px;
    font-size: 20px;
    border: 1px solid #bdbdbd;
    border-radius: 5px ;
    padding: 0px 20px 0px 20px;
    &:hover{
        border: 1px solid #84d0e0;
    }
    &:focus{
        outline: none;
        border: 1px solid #87cbff;
    }
`
export const Label = styled.div`
    width: 200px;
    color: #575757;
    font-size: 25px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const UserName = styled.h2`
    font-size: 30px;
`

export const TextArea = styled.textarea`
    width: 400px;
    height:200px ;
    resize: none;
    padding: 20px ;
    border: 1px solid #bdbdbd;
    border-radius: 5px ;
    font-size: 20px;
    &:hover{
        border: 1px solid #84d0e0;
    }

    &:focus{
        outline: none;
        border: 1px solid #87cbff;
    }
`

export const NewList = styled.button`
    height: 45px;
    width: 200px;
    margin: 20px auto;
    background-color: ${SubmitBtnNormal};
    font-size: 18px;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: ${SubmitBtnHover};
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`