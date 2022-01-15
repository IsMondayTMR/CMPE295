import styled from "styled-components";
import { Link } from "react-router-dom";
import defaultImage from "../../resources/defaultPlaceholder.png"

export const Container = styled.div`
    background-image: url(${props => props.imageUrl ? props.imageUrl : defaultImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`

export const RouteLink = styled(Link)`
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
` 