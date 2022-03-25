import styled from "styled-components";

export const BackGround = styled.div`
    padding: 1rem;
`

export const ImagesContainer = styled.div` 
    display :grid ;
    grid-template-columns: repeat(4, minmax(75px, 1fr));
    grid-auto-rows:  minmax(75px, 1fr);
    row-gap: 5px;
    column-gap: 5px;
`
export const DeleteContainer = styled.div`
    width: 16px;
    height: 16px;
    position : absolute;
    color: black;
    top: -5px;
    right: -2px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: white;
    font-size: 15px;
    &:hover {
        cursor: pointer;
    }
`

export const ImageBox = styled.div`
    display: flex;
    position: relative;
    height: 75px;
    width: 75px;  
    margin : 10px;
`
export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`