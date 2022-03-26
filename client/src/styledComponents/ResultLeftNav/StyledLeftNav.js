import styled from "styled-components";
import { Link } from "react-router-dom";
export const Background = styled.div`
    width: 30%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const RouteLink = styled(Link)`
    font-size: 20px;
    color: black;
    text-decoration: none;
    &:hover{
        border-bottom: 1px solid black;
    }
`

export const RouteContainer = styled.div`
    margin: 0;
`

export const SubLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 20px;
`