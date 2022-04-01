import React from "react";
import SearchSubHeader from "../components/result/SearchSubHeader";
import ResultContent from "../components/result/ResultContent";
import ResultLeftNav from "../components/result/ResultLeftNav";
import { ResultComp } from "../styledComponents/export";

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


export default SearchResult;