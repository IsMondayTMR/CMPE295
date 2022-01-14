import React from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Category from "../components/Category";

const Home = () => {
    return (
        <React.Fragment>
            <Search />
            <Category />
            <Footer />
        </React.Fragment>
    );
};

export default Home;