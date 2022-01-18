import React from "react";

import Category from "../components/Category";
import SearchContainer from "./SearchContainer";

const Home = () => {
    return (
        <React.Fragment>
            <SearchContainer />
            <Category />

        </React.Fragment>
    );
};

export default Home;