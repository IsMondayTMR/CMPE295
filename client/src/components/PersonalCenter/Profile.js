import React from "react";
import { ProfileComp } from "../../styledComponents/export";
import UserImage from "../../resources/userImage.png";
const Profile = () => {

    return <ProfileComp.ContentContainer>

        <ProfileComp.ImageContainer>
            <ProfileComp.Image src={UserImage} alt="User Image" />
        </ProfileComp.ImageContainer>
        <ProfileComp.UserName>IsMondayTMR</ProfileComp.UserName>
        <ProfileComp.InputContainer>
            <ProfileComp.InputGroup>
                <ProfileComp.Label>Email</ProfileComp.Label>
                <ProfileComp.Input value="Test1@gmail.com" disabled />
            </ProfileComp.InputGroup>
            <ProfileComp.InputGroup>
                <ProfileComp.Label>Phone Number</ProfileComp.Label>
                <ProfileComp.Input value="1313412412" disabled />
            </ProfileComp.InputGroup>
            <ProfileComp.InputGroup>
                <ProfileComp.Label>Description</ProfileComp.Label>
                <ProfileComp.TextArea maxLength="50" value="description" disabled />
            </ProfileComp.InputGroup>
        </ProfileComp.InputContainer>

    </ProfileComp.ContentContainer>;
};

export default Profile;