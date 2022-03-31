import React from "react";
import SearchSubHeader from "../components/result/SearchSubHeader";
import ResultContent from "../components/result/ResultContent";
import ResultLeftNav from "../components/result/ResultLeftNav";
import { ResultComp } from "../styledComponents/export";
import { useParams } from "react-router-dom";
const SearchResult = () => {

    const { key, category, user_id } = useParams();
    return (
        <ResultComp>
            <SearchSubHeader />
            <ResultComp.Container>
                <ResultLeftNav />
                <ResultContent key={key} category={category} user_id={user_id} />
            </ResultComp.Container>
        </ResultComp>
    );
};


export default SearchResult;