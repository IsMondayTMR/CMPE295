import React from "react";
import data from "../../const/cardData";
import { ResultLeftNavComp } from "../../styledComponents/export";
import * as ROUTES from "../../router/routes";
const ResultLeftNav = () => {
    const Links = data.map((object) => {
        const subtitles = object.subtitle.map((subtitle, index) => {
            return <ResultLeftNavComp.SubLink to={`${ROUTES.SEARCH}/${subtitle}`} key={index}>
                {subtitle}
            </ResultLeftNavComp.SubLink>;
        });
        return <React.Fragment key={object.key}>
            <ResultLeftNavComp.Link to={`${ROUTES.SEARCH}/${object.title}`} style={{ fontWeight: "bold" }}>{object.title}</ResultLeftNavComp.Link>
            <ResultLeftNavComp.SubLinkContainer>
                {subtitles}
            </ResultLeftNavComp.SubLinkContainer>
        </React.Fragment>;

    });
    return <ResultLeftNavComp>
        <ResultLeftNavComp.Container>
            {Links}
        </ResultLeftNavComp.Container>
    </ResultLeftNavComp>;
};

export default ResultLeftNav;