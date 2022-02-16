import React from "react";
import { DropDownComp } from "../styledComponents/export";
import { connect } from "react-redux";
import { signOut } from "../actions";
import * as ROUTES from "../router/routes";
import PropTypes from "prop-types";
const ProfileDropDown = (props) => {
    console.log(props?.auth);
    return (
        <DropDownComp >
            <DropDownComp.Button>
                <i className="fas fa-user-circle" />{props?.auth?.user?.Username}
            </DropDownComp.Button>
            <DropDownComp.DropDownContent >
                <DropDownComp.List>
                    <DropDownComp.LinkItem to={ROUTES.PROFILE}>Profile</DropDownComp.LinkItem>
                    <DropDownComp.LinkItem to={`${ROUTES.PROFILE}/history`}>History</DropDownComp.LinkItem>
                    <DropDownComp.LinkItem to={`${ROUTES.PROFILE}/setting`}>Setting</DropDownComp.LinkItem>
                    <DropDownComp.ItemBtn onClick={() => props.signOut(props.auth)} >Sign Out</DropDownComp.ItemBtn>
                </DropDownComp.List>
            </DropDownComp.DropDownContent>
        </DropDownComp>
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

ProfileDropDown.propTypes = {
    auth: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signOut })(ProfileDropDown);