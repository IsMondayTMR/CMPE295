import React from "react";
import data from "../../const/cardData";
import { ResultLeftNavComp } from "../../styledComponents/export";
import { useParams } from "react-router-dom";
import { filter_data } from "../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const ResultLeftNav = (props) => {

    const { category } = useParams();
    const filter = (category, subcategory) => {
        props.filter_data(category, subcategory);
    };
    const Links = data.map((object) => {
        const subtitles = object.subtitle.map((subtitle, index) => {
            return <ResultLeftNavComp.SubLink
                onClick={() => {
                    filter(object.title, subtitle);
                }}
                key={index}>
                {subtitle}
            </ResultLeftNavComp.SubLink>;
        });
        return <React.Fragment key={object.key}>
            <ResultLeftNavComp.Link
                style={{ fontWeight: "bold" }}
                onClick={() => {
                    filter(object.title, null);
                }}>
                {object.title}
            </ResultLeftNavComp.Link>
            <ResultLeftNavComp.SubLinkContainer>
                {subtitles}
            </ResultLeftNavComp.SubLinkContainer>
        </React.Fragment>;

    });

    return <ResultLeftNavComp hide={category == "user"}>
        <ResultLeftNavComp.Container>
            <ResultLeftNavComp.Link
                style={{ fontWeight: "bold" }}
                onClick={() => {
                    filter("All", null);
                }}>
                All
            </ResultLeftNavComp.Link>
            {Links}
        </ResultLeftNavComp.Container>
    </ResultLeftNavComp>;
};

ResultLeftNav.propTypes = {
    filter_data: PropTypes.func.isRequired,
};
export default connect(null, { filter_data })(ResultLeftNav);