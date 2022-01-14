import React from "react";
import { CategoryComp } from "../styledComponents/export";
import Card from "./Card";
const Category = () => {
    return (
        <CategoryComp>
            <CategoryComp.Container>
                Category
                <Card />
            </CategoryComp.Container>
        </CategoryComp>);
};

export default Category;
