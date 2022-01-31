import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackGround = styled.div`
    background-color: #f2f2f2;
`

export const Container = styled.div`
    width: 70%;
    border: 1px solid red;
    margin: 0 auto;
    background-color: white;
    display: flex;
`
export const NavContainer = styled.div`
    width: 30%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    
`

export const RouteLink = styled(Link)``

export const ContentContainer = styled.div``

export const Button = styled.button