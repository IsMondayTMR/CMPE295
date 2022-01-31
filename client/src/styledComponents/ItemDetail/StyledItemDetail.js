import styled from "styled-components";

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
    padding: 2% 0;
`

export const PrimaryImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
`
export const ImageList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 0 0;
`
export const SecondaryImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: ${({ active }) => active ? "2px solid orange" : "2px solid grey"};
    
    &:hover{
        border: 2px solid orange;
    }
`
export const InforContainer = styled.div`
    width: 70%;
    margin-left: 5vw;
`

export const Break = styled.hr`
    width: 80%;
`

export const Button = styled.button`
    
`

export const Title = styled.h2`
    font-size: 30px;
`

export const Text = styled.p`
    margin: 5px;
    font-size: 25px;
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