import React from "react";
import { CardComp } from "../styledComponents/export";
import * as ROUTES from "../router/routes";
import PropTypes from "prop-types";
const Card = ({ location }) => {
    return <CardComp to={`${ROUTES.SEARCH}/${location}`}>Card</CardComp>;
};

Card.propTypes = {
    location: PropTypes.string.isRequired
};
export default Card;