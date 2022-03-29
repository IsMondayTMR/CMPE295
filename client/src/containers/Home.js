import React from "react";

import Category from "../components/Category";
import Recommendation from "../components/Recommendation";
import SearchContainer from "./SearchContainer";

const Home = () => {
    return (
        <React.Fragment>
            <SearchContainer />
            <Recommendation />
            <Category />

        </React.Fragment>
    );
};

export default Home;