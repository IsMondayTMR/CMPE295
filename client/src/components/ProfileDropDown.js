import React, { useEffect, useState } from "react";
import { DropDownComp } from "../styledComponents/export";
import { connect } from "react-redux";
import { signOut } from "../actions";
import * as ROUTES from "../router/routes";
import PropTypes from "prop-types";
import UserImage from "../resources/defaultAvatar.png";
import { useHistory } from "react-router-dom";
const ProfileDropDown = ({ user, signOut }) => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState(null);
    useEffect(() => {
        if (user?.user != null) {
            user?.user.forEach(element => {
                if (element.Name == "preferred_username") setUsername(element.Value);
                if (element.Name == "custom:avatar_url") setAvatar(element.Value);
            });
        }
    }, [username, avatar]);

    return (

        <DropDownComp >
            <DropDownComp.Button>
                <DropDownComp.Avatar src={avatar !== null ? avatar : UserImage} />
                {username}
            </DropDownComp.Button>
            <DropDownComp.DropDownContent >
                <DropDownComp.List>
                    <DropDownComp.LinkItem to={ROUTES.PROFILE}>Profile</DropDownComp.LinkItem>
                    <DropDownComp.LinkItem to={`${ROUTES.PROFILE}/history`}>History</DropDownComp.LinkItem>
                    <DropDownComp.LinkItem to={`${ROUTES.PROFILE}/setting`}>Setting</DropDownComp.LinkItem>
                    <DropDownComp.ItemBtn
                        onClick={() => {
                            signOut();
                            history.push("/");
                            window.location.reload(false);
                        }} >Sign Out</DropDownComp.ItemBtn>
                </DropDownComp.List>
            </DropDownComp.DropDownContent>
        </DropDownComp>
    );
};

const mapStateToProps = (state) => {
    return { user: state.user };
};

ProfileDropDown.propTypes = {
    user: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signOut })(ProfileDropDown);