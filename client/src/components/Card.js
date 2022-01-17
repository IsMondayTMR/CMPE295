import React from "react";
import { CardComp } from "../styledComponents/export";
import * as ROUTES from "../router/routes";
import PropTypes from "prop-types";
const Card = ({ location, title }) => {
    return <CardComp
        to={`${ROUTES.SEARCH}/${location}`}
        data-test="card">
        {title}
    </CardComp>;
};

Card.propTypes = {
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
export default Card;