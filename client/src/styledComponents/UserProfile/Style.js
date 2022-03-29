import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackGround = styled.div`
    padding: 1rem;
`

export const Container = styled.div`
    width: 80%;
    min-height: 700px;
    margin: 0 auto;
`
export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
`
export const ImageContainer = styled.div`
    display: flex;
`

export const PrimaryImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
`


export const InforContainer = styled.div`
    width: 80%;
    margin-left: 5vw;
`
export const UserInfoContainer = styled.div`
    display: flex;
    margin: 0 0 20px;
    font-size: 20px;

`
export const Username = styled.p`
    margin: 0;
`

export const Icon = styled.div`
    color: ${props => props.color ? props.color : "black"};
    margin:0 5px;
`
export const IconBox = styled.div`
    display: flex;
    margin: 30px 0;
    margin-right: 10px;
    &:hover{
        cursor: pointer;
    }
`
export const Break = styled.hr`
    width: 100%;
`

export const Button = styled.button`
    
`

export const Title = styled.h2`
    font-size: 30px;
    margin: 0 0 10px;
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
export const IconContainer = styled.div`
    margin: 1rem;
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

export const ItemListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(75px, 100px));
    grid-auto-rows: 100px;
    row-gap: 15px;
    column-gap: 15px;

`
export const ImageLink = styled(Link)`
`
export const ItemImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`

export const DetailContainer = styled.div`

`