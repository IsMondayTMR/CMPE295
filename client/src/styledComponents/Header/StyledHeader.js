import styled from "styled-components";
import { Link } from "react-router-dom";
// prettier-ignore
export const BackGround = styled.div`
    height: 75px;
    background-color: #d1d1d1;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    height : 100%;
    justify-content: space-between;
    align-items: center;
    width: 80%;
`;
export const WebsiteName = styled.p`
    font-size: 25px;
    margin-left: 1.5rem;
    font-weight: 600;
`;
export const RightPanelContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Text = styled.p`
    font-size: 20px;
;`
export const Icon = styled.i`
    font-size: 25px;
    margin: 0 5px;
`
export const TextButton = styled.p`
    font-size: 20px;

    &:hover {
        color: white;
        padding-bottom: 5px;
        border-bottom: 1px solid black;
    }
`;

export const Button = styled.button`
    width: 125px;
    height: 45px;
    font-size: 18px;
    font-weight: bolder;
    border-radius: 20px;
    border: none;
    background-color: #5c5c5c;
    color: #f0f0f0;
    &:hover{
        background-color: #7c7c7c;
        color: #E0E0E0;
    }
`;

export const RouteLink = styled(Link)`
    text-decoration: none;
    color: #383838;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 45px;
`;