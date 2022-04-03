import React from "react";
import SearchSubHeader from "../components/result/SearchSubHeader";
import ResultContent from "../components/result/ResultContent";
import ResultLeftNav from "../components/result/ResultLeftNav";
import { ResultComp } from "../styledComponents/export";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

const SearchResult = () => {

    return (
        <ResultComp>
            <SearchSubHeader />
            <ResultComp.Container>
                <ResultLeftNav />
                <ResultContent />
            </ResultComp.Container>
        </ResultComp>
    );
};

// SearchResult.propTypes = {
//     // search: PropTypes.func.isRequired,
//     data: PropTypes.any.isRequired,
//     success: PropTypes.bool,

// };

// const mapStateToProps = (state) => {
//     return {
//         success: state.search.success,
//         key: state.search.key,
//         category: state.search.category == null ? "item" : state.search.category,
//         data: state.search.data,
//         user: state.user
//     };
// };

export default SearchResult;