import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
`

export const Container = styled.div`
    margin: 0 auto;
    width: 70%;

    text-align: center;
`
export const Title = styled.p`
    
    font-weight: bolder;
    font-size: 35px;
    margin-top: 30px 0;
`
export const UnderLine = styled.div`
    display: ${(props) => props.hide ? "none" : "block"};
    background-color: black;
    width: 10%;
    height: 2px;
    margin: 30px auto 30px auto;
`
export const ImageList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`
export const RouteLink = styled(Link)`
    text-decoration: none;
`

export const Image = styled.img`
    height: 100px;
    width: 100px;
    margin: 10px;
`