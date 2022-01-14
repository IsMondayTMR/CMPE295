import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: start;
    width: 95%;
    margin: 0 auto;
`;

export const Button = styled.button`
    text-align: center;
    height: 40px;
    margin: 0 auto;
    margin-bottom: 20px;
    font-size: 15px;
    width: 95%;
    color: ${props => props.color || "black"};
    background-color: ${props => props.backgroundColor || "white"};
    border: 1px solid #bfbfbf;
    border-radius: 5px;

    &:hover {
        color: black;
        background-color: white;
        cursor: pointer;
    }
`;

