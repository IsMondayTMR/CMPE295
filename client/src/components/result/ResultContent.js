import React from "react";
import { ResultContentComp, Loading } from "../../styledComponents/export";
import { connect } from "react-redux";
import { search } from "../../actions";
import PropTypes from "prop-types";
import defaultImage from "../../resources/defaultPlaceholder.png";
import Loader from "../../resources/loader.gif";
import *as ROUTES from "../../router/routes";
class ResultContent extends React.Component {

    componentDidMount() {
        this.props.search(this.props.category, this.props.user_id, this.props.key);
    }

    renderData = () => {
        if (this.props?.data?.length === 0) {
            return this.props?.success === null ? <Loading src={Loader} /> : <ResultContentComp.NoResultText>Opps! Seems like no items were found</ResultContentComp.NoResultText>;
        }

        return this.props?.data?.map(object => {
            console.log(object);
            return (
                <ResultContentComp.Card key={object.id}>
                    <ResultContentComp.Link to={`${ROUTES.SEARCH}/item_detail/${this.props.category}/${this.props.user_id}/${object.id}`}>
                        <ResultContentComp.Img src={object.media_urls == null ? defaultImage : object.media_urls[0]} alt="test" />
                    </ResultContentComp.Link>
                    <ResultContentComp.Title>{object.title}</ResultContentComp.Title>
                    <ResultContentComp.InforContainer>
                        <ResultContentComp.Username to="">{object.name}</ResultContentComp.Username>
                        <ResultContentComp.Donate hide={object.donate ? "block" : "none"}>Donate</ResultContentComp.Donate>
                    </ResultContentComp.InforContainer>
                </ResultContentComp.Card>);
        });

    };

    render() {
        return <ResultContentComp>
            {this.renderData()}
        </ResultContentComp>;
    }

}

ResultContent.propTypes = {
    search: PropTypes.func.isRequired,
    data: PropTypes.any.isRequired,
    success: PropTypes.bool,
    category: PropTypes.string.isRequired,
    key: PropTypes.string,
    user_id: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
    return {
        success: state.search.success,
        term: state.search.searchTerm,
        data: state.search.data
    };
};

export default connect(mapStateToProps, { search })(ResultContent);