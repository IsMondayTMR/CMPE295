import React from "react";
import data from "../../const/cardData";
import { SubHeaderComp } from "../../styledComponents/export";
import * as ROUTES from "../../router/routes";
const SearchSubHeader = () => {
    const Links = data.map((object) => <SubHeaderComp.Link to={`${ROUTES.SEARCH}/${object.title}`} key={object.key}>{object.title}</SubHeaderComp.Link>);
    return <SubHeaderComp>
        <SubHeaderComp.Container>
            {Links}
        </SubHeaderComp.Container>
    </SubHeaderComp>;
};

export default SearchSubHeader;