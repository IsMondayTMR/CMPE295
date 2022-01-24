import React from "react";
import { ResultContentComp, Loading } from "../../styledComponents/export";
import { connect } from "react-redux";
import { search } from "../../actions";
import PropTypes from "prop-types";
import defaultImage from "../../resources/defaultPlaceholder.png";
import Loader from "../../resources/loader.gif";
class ResultContent extends React.Component {

    componentDidMount() {
        this.props.search(this.props.searchTerm);
    }

    renderData = () => {
        if (this.props.data.length === 0) {
            return this.props.success === null ? <Loading src={Loader} /> : <ResultContentComp.NoResultText>Opps! Seems like no items were found</ResultContentComp.NoResultText>;
        }
        return this.props.data.map(object => {
            return (
                <ResultContentComp.Card to={`/search/${this.props.searchTerm}/${object.id}`} key={object.id}>
                    <ResultContentComp.Img src={defaultImage} alt="test" />
                    <ResultContentComp.InforContainer>
                        <ResultContentComp.Title>{object.Title}</ResultContentComp.Title>
                        <ResultContentComp.Description>{object.Description}</ResultContentComp.Description>
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
    searchTerm: PropTypes.string.isRequired,
    success: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        success: state.search.success,
        term: state.search.searchTerm,
        data: state.search.data
    };
};

export default connect(mapStateToProps, { search })(ResultContent);