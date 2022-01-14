import styled from "styled-components";
import BackgroundImg from "../../resources/SearchBackground.jpg";
export const Background = styled.div`
    background-image: url(${BackgroundImg});
    height: calc(75vh - 75px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #464646;
    outline: none;
    display: flex;
    align-items: center;
  
`

export const Container = styled.div`
    width: 40%;
    position: relative;
    display: flex;  
    margin-left: auto;
    margin-right: auto;

`

export const Icon = styled.button`
        outline: none;
        width: 50px;
        height: 60px;
        background:white;
        border: 1px solid white;
        border-radius: 0px 0.75rem 0.75rem 0px;
        text-align: center;
        color: black;
        cursor: pointer;
        font-size: 20px;
`
export const Input = styled.input`
        width: 100%;
        border-right: none;
        font-size:20px;
        padding-left: 15px;
        outline: none;
        border: 4px solid white;
        border-radius: 0.75rem 0rem 0rem 0.75rem;
        color: black;
        margin: 0 auto;
       
    
`