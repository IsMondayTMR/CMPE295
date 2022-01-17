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

export const Form = styled.form`
    width: ${({ width }) => width ? width : "40%"};
    height: ${({ height }) => height ? height : "65px"};
    position: relative;
    display: flex;  
    margin-left: auto;
    margin-right: auto;
    border: ${({ border }) => border ? border : "none"};
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : "0.75rem"};
`

export const Button = styled.button`
        outline: none;
        width: 50px;
        height: 100%;
        background:white;
        border: 1px solid white;
        border-radius: ${({ borderRadius }) => borderRadius ? `0px ${borderRadius} ${borderRadius} 0px` : ` 0rem 0.75rem 0.75rem 0rem`};
        text-align: center;
        color: black;
        cursor: pointer;
        font-size: 20px;
`
export const Input = styled.input`
        width: 100%;
        border-right: none;
        font-size:${({ fontSize }) => fontSize ? fontSize : "20px"};
        padding-left: 15px;
        outline: none;
        border: 4px solid white;
        border-radius: ${({ borderRadius }) => borderRadius ? `${borderRadius} 0px 0px ${borderRadius} ` : `0.75rem 0rem 0rem 0.75rem`};
        color: black;
        margin: 0 auto;
    
`