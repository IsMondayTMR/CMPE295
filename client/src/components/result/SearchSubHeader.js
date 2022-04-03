import React from "react";
import data from "../../const/cardData";
import { SubHeaderComp } from "../../styledComponents/export";
import * as ROUTES from "../../router/routes";

import { useParams } from "react-router-dom";

const SearchSubHeader = () => {
    const { category } = useParams();
    const Links = data.map((object) => <SubHeaderComp.Link to={`${ROUTES.SEARCH}/${object.title}`} key={object.key}>{object.title}</SubHeaderComp.Link>);
    return <SubHeaderComp hide={category == "user"}>
        <SubHeaderComp.Container>
            {Links}
        </SubHeaderComp.Container>
    </SubHeaderComp>;
};

export default SearchSubHeader;