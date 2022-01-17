import React, { useEffect } from "react";
import { connect } from "react-redux";
import { search } from "../actions";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";


const Result = (props) => {

    const { term } = useParams();
    useEffect(() => {
        props.search(term);
    }, []);
    console.log(props);
    return (

        <React.Fragment>
            result
        </React.Fragment >
    );
};

Result.propTypes = {
    search: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        term: state.search.searchTerm,
        data: state.search.data
    };
};
export default connect(mapStateToProps, { search })(Result);