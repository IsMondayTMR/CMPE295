import React from "react";
import { DropDownComp } from "../styledComponents/export";
import { connect } from "react-redux";
import { signOut } from "../actions";
import * as ROUTES from "../router/routes";
import PropTypes from "prop-types";
import UserImage from "../resources/defaultAvatar.png";
const ProfileDropDown = ({ user, signOut }) => {
    return (

        <DropDownComp >
            <DropDownComp.Button>
                <DropDownComp.Avatar src={user?.user[10]?.Value ? user?.user[10]?.Value : UserImage} />
                {user?.user[9]?.Value.substring(0, 5)}
            </DropDownComp.Button>
            <DropDownComp.DropDownContent >
                <DropDownComp.List>
                    <DropDownComp.LinkItem to={ROUTES.PROFILE}>Profile</DropDownComp.LinkItem>
                    <DropDownComp.LinkItem to={`${ROUTES.PROFILE}/history`}>History</DropDownComp.LinkItem>
                    <DropDownComp.LinkItem to={`${ROUTES.PROFILE}/setting`}>Setting</DropDownComp.LinkItem>
                    <DropDownComp.ItemBtn
                        onClick={() => {
                            signOut();
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