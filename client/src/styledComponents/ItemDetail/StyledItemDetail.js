import styled from "styled-components";
import { Link } from "react-router-dom";
export const BackGround = styled.div`
    padding: 1rem;
`

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`
export const ContentContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
`
export const ImageContainer = styled.div`
    width: 40%;
    display: flex;
    margin: 10px;
    justify-content: center;
`

export const PrimaryImage = styled.img`
    min-width: 200px;   
    min-height: 200px;
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
`
export const ImageList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 0 0;
`
export const SecondaryImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border: ${({ active }) => active ? "2px solid orange" : "2px solid grey"};
    
    &:hover{
        border: 2px solid orange;
    }
`

export const UserInfoContainer = styled.div`
    display: flex;
    margin: 0 0 20px;
    font-size: 1rem;
`
export const Username = styled(Link)`
    margin: 0;
    text-decoration: none;
    color: #005eab;
    &:hover{
        color: red;
        text-decoration: underline;
    }
`

export const IconContainer = styled.div`
    display: flex;
    margin: 0 0 20px;
    font-size: 1rem;
    color: #005eab;

`

export const Icon = styled.div`
    color: ${props => props.color ? props.color : "black"};
    margin-right: 5px;
`
export const IconBox = styled.div`
    display: flex;
    margin-right: 10px;
    &:hover{
        cursor: pointer;
        color: red;
        text-decoration: underline;
    }
`
export const Break = styled.hr`
    width: 80%;
`
export const InforContainer = styled.div`
    width: 60%;
    ${Break} {
        width: 100%;
    }
`
export const Button = styled.button`
    
`

export const Title = styled.h2`
    font-size: 30px;
    margin: 0 0 10px;
`
export const DetailContainer = styled.div`

`

export const Text = styled.p`
    margin: 5px;
    font-size: 20px;
`

export const BackIcon = styled.i`
    
`
export const BackText = styled.p`
    border-bottom: 1px solid transparent;
`
export const BackIconContainer = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    cursor: pointer;
    &:hover ${BackText} {
        border-bottom: 1px solid black;
        color: grey;
    }  
`