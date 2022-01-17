import React from "react";
import Footer from "../components/Footer";
import Category from "../components/Category";
import SearchContainer from "./SearchContainer";

const Home = () => {
    return (
        <React.Fragment>
            <SearchContainer />
            <Category />
            <Footer />
        </React.Fragment>
    );
};

export default Home;