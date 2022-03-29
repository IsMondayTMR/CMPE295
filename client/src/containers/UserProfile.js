import React from "react";
import { UserProfileComp } from "../styledComponents/export";
import AVATAR from "../resources/maria-bo-schatzis-stream-profilpicture.jpg";
import { useHistory } from "react-router-dom";

const UserProfile = () => {
    const history = useHistory();

    const renderItem = () => {

        return (
            <>
                <UserProfileComp.ImageLink>
                    <UserProfileComp.ItemImage src={AVATAR} />
                </UserProfileComp.ImageLink>
                <UserProfileComp.ImageLink>
                    <UserProfileComp.ItemImage src={AVATAR} />
                </UserProfileComp.ImageLink>
                <UserProfileComp.ImageLink>
                    <UserProfileComp.ItemImage src={AVATAR} />
                </UserProfileComp.ImageLink>
                <UserProfileComp.ImageLink>
                    <UserProfileComp.ItemImage src={AVATAR} />
                </UserProfileComp.ImageLink>
                <UserProfileComp.ImageLink>
                    <UserProfileComp.ItemImage src={AVATAR} />
                </UserProfileComp.ImageLink>
                <UserProfileComp.ImageLink>
                    <UserProfileComp.ItemImage src={AVATAR} />
                </UserProfileComp.ImageLink>
                <UserProfileComp.ImageLink>
                    <UserProfileComp.ItemImage src={AVATAR} />
                </UserProfileComp.ImageLink>
                <UserProfileComp.ImageLink>
                    <UserProfileComp.ItemImage src={AVATAR} />
                </UserProfileComp.ImageLink>
                <UserProfileComp.ImageLink>
                    <UserProfileComp.ItemImage src={AVATAR} />
                </UserProfileComp.ImageLink>

            </>

        );
    };
    const renderInfor = () => {
        return <UserProfileComp.InforContainer>
            <UserProfileComp.Title>
                IsMondayTMR
            </UserProfileComp.Title>

            <UserProfileComp.DetailContainer>
                <UserProfileComp.Text>
                    Rating
                </UserProfileComp.Text>
            </UserProfileComp.DetailContainer>
            <UserProfileComp.UserInfoContainer>
                <UserProfileComp.IconBox>
                    <UserProfileComp.Icon>
                        <i className="far fa-comment"></i>
                    </UserProfileComp.Icon>
                    message
                </UserProfileComp.IconBox>
                <UserProfileComp.IconBox>
                    <UserProfileComp.Icon color={"#40bced"}>
                        <i className="fas fa-map-marker-alt"></i>
                    </UserProfileComp.Icon>
                    location
                </UserProfileComp.IconBox>
            </UserProfileComp.UserInfoContainer>

            <UserProfileComp.Text>
                Item List
            </UserProfileComp.Text>
            <UserProfileComp.Break />
            <UserProfileComp.ItemListContainer>

                {renderItem()}
            </UserProfileComp.ItemListContainer>

        </UserProfileComp.InforContainer>;
    };
    return <UserProfileComp>
        <UserProfileComp.Container>
            <UserProfileComp.IconContainer onClick={() => { history.goBack(); }}>
                <UserProfileComp.BackIcon />
                <UserProfileComp.BackText>Back</UserProfileComp.BackText>
            </UserProfileComp.IconContainer>

            <UserProfileComp.ContentContainer>
                <UserProfileComp.ImageContainer>
                    <UserProfileComp.PrimaryImage src={AVATAR} alt="Primary Image" />
                </UserProfileComp.ImageContainer>
                {renderInfor()}
            </UserProfileComp.ContentContainer>

        </UserProfileComp.Container>

    </UserProfileComp>;
};


export default UserProfile;
