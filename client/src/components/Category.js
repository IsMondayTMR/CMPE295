import React from "react";
import { CategoryComp } from "../styledComponents/export";
import Card from "./Card";
const Category = () => {
    return (
        <CategoryComp>
            <CategoryComp.Container>
                <CategoryComp.Header>
                    Category
                    <CategoryComp.HeaderUnderLine />
                </CategoryComp.Header>

                <CategoryComp.CardContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CategoryComp.CardContainer>

            </CategoryComp.Container>
        </CategoryComp>);
};

export default Category;
