import React from "react";
import { CategoryComp } from "../styledComponents/export";
import Card from "./Card";
import data from "../const/cardData";
const Category = () => {

    const cards = data.map((object) => <Card location={object.title} title={object.title} key={object.key} data-test="card" />);
    return (
        <CategoryComp data-test="category-background">
            <CategoryComp.Container data-test="category-container">
                <CategoryComp.HeaderContainer data-test="category-header-container">
                    <CategoryComp.Header data-test="category-header">
                        Category
                    </CategoryComp.Header>
                    <CategoryComp.HeaderUnderLine data-test="category-header-underline" />
                </CategoryComp.HeaderContainer>

                <CategoryComp.CardContainer data-test="category-card-container">
                    {cards}
                </CategoryComp.CardContainer>

            </CategoryComp.Container>
        </CategoryComp>);
};

export default Category;
