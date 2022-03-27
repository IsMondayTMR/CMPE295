import React, { useEffect, useState } from "react";
import { DropDownComp } from "../styledComponents/export";
import { connect } from "react-redux";
import { signOut } from "../actions";
import * as ROUTES from "../router/routes";
import PropTypes from "prop-types";
import UserImage from "../resources/defaultAvatar.png";
import { useHistory } from "react-router-dom";
const ProfileDropDown = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState(null);
    useEffect(() => {
        if (props?.user != null) {
            props?.user.forEach(element => {
                if (element.Name == "preferred_username") setUsername(element.Value);
                if (element.Name == "custom:avatar_url") setAvatar(element.Value);
            });
        }
    }, [props.user]);

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
                            props?.signOut();
                            history.push("/");
                            window.location.reload(false);
                        }} >Sign Out</DropDownComp.ItemBtn>
                </DropDownComp.List>
            </DropDownComp.DropDownContent>
        </DropDownComp>
    );
};

const mapStateToProps = (state) => {
    return { user: state.user.user };
};

ProfileDropDown.propTypes = {
    user: PropTypes.array.isRequired,
    signOut: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signOut })(ProfileDropDown);