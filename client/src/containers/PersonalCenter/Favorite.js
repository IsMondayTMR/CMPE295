import React from "react";
import { ProfileComp, ResultContentComp } from "../../styledComponents/export";
import IMAGE from "../../resources/1.jpg";
const Favorite = () => {

    const renderCard = () => {
        return (<ResultContentComp.ListCard>
            <ResultContentComp.Link>
                <ResultContentComp.Img src={IMAGE} />
                <ResultContentComp.InforContainer>
                    <ResultContentComp.Title>Title</ResultContentComp.Title>
                    <ResultContentComp.Description>Description</ResultContentComp.Description>
                    <ResultContentComp.Donate >Donate</ResultContentComp.Donate>
                </ResultContentComp.InforContainer>
            </ResultContentComp.Link>
            <ResultContentComp.ButtonContainer>
                <ResultContentComp.Button>remove</ResultContentComp.Button>
            </ResultContentComp.ButtonContainer>
        </ResultContentComp.ListCard >);
    };
    return <ProfileComp.ContentContainer>
        Favorite
        {renderCard()}
    </ProfileComp.ContentContainer>;
};

export default Favorite;