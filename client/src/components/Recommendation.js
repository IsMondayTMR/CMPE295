import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecommendation } from "../actions";
import PropTypes from "prop-types";
import { RecommendComp } from "../styledComponents/export";
import * as ROUTES from "../router/routes";
import defaultImg from "../resources/1.jpg";
const Recommendation = (props) => {

    useEffect(() => {
        //fetch recommend items 
        if (!props?.user?.status) {
            props.getRecommendation();
        }

    }, []);

    const renderList = () => {
        if (props?.recommend?.success == null || !props?.recommend?.success) {
            return <>
                Loading
            </>;
        }


        const List = props?.recommend?.items.map((item, index) => {
            return <RecommendComp.RouteLink to={`${ROUTES.DEFAULT}recommendation/${item.id}`} key={index}>
                <RecommendComp.Image src={defaultImg} alt={`${item.description}`} />
            </RecommendComp.RouteLink>;
        });
        return <RecommendComp.ImageList>
            {List}
        </RecommendComp.ImageList>;
    };
    return (
        <RecommendComp>

            <RecommendComp.Container>
                <RecommendComp.Title>{props.text ? props.text : "Recommendations"}</RecommendComp.Title>
                <RecommendComp.UnderLine hide={props.breakHide} />
                {renderList()}
            </RecommendComp.Container>
        </RecommendComp>
    );
};

Recommendation.propTypes = {
    getRecommendation: PropTypes.func.isRequired,
    recommend: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    text: PropTypes.string,
    breakHide: PropTypes.bool
};
const mapStateToProps = (state) => {
    return {
        recommend: state.recommendation,
        user: state.user,
    };
};


export default connect(mapStateToProps, { getRecommendation })(Recommendation);