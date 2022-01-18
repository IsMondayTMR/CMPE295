import React from "react";
import data from "../../const/cardData";
import { ResultLeftNavComp } from "../../styledComponents/export";
import * as ROUTES from "../../router/routes";
const ResultLeftNav = () => {
    const Links = data.map((object) => <ResultLeftNavComp.Link to={`${ROUTES.SEARCH}/${object.title}`} key={object.key}>{object.title}</ResultLeftNavComp.Link>);
    return <ResultLeftNavComp>
        <ResultLeftNavComp.Container>
            {Links}
        </ResultLeftNavComp.Container>
    </ResultLeftNavComp>;
};

export default ResultLeftNav;