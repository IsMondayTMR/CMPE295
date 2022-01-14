import styled from "styled-components";
import { Link } from "react-router-dom";
import defaultImage from "../../resources/defaultPlaceholder.png"

export const Container = styled.div`
    background-image: url(${props => props.imageUrl ? props.imageUrl : defaultImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    width: 300px;
`

export const RouteLink = styled(Link)`
` 