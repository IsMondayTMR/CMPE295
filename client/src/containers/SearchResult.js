import React from "react";
import SearchSubHeader from "../components/result/SearchSubHeader";
import ResultContent from "../components/result/ResultContent";
import ResultLeftNav from "../components/result/ResultLeftNav";
import { ResultComp } from "../styledComponents/export";
import { useParams } from "react-router-dom";
const SearchResult = () => {

    const { term } = useParams();
    return (
        <ResultComp>
            <SearchSubHeader />
            <ResultComp.Container>
                <ResultLeftNav />
                <ResultContent searchTerm={term} />
            </ResultComp.Container>
        </ResultComp>
    );
};


export default SearchResult;