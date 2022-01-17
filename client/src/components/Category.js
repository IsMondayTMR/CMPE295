import React from "react";
import { CategoryComp } from "../styledComponents/export";
import Card from "./Card";
const Category = () => {
    return (
        <CategoryComp>
            <CategoryComp.Container>
                <CategoryComp.HeaderContainer>
                    <CategoryComp.Header>
                        Category
                    </CategoryComp.Header>
                    <CategoryComp.HeaderUnderLine />
                </CategoryComp.HeaderContainer>

                <CategoryComp.CardContainer>
                    <Card location="1" />
                    <Card location="2" />
                    <Card location="3" />
                    <Card location="4" />
                    <Card location="5" />
                    <Card location="6" />
                    <Card location="7" />
                    <Card location="8" />
                    <Card location="9" />
                </CategoryComp.CardContainer>

            </CategoryComp.Container>
        </CategoryComp>);
};

export default Category;
