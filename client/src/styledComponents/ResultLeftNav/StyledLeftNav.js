import styled from "styled-components";
export const Background = styled.div`
    width: 30%;
    display: ${props => props.hide ? "none" : "block"};
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const RouteLink = styled.p`
    font-size: 20px;
    color: black;
    display: inline-block;
    margin: 0;
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