import React from "react";
import { DropDownComp } from "../styledComponents/export";
import { connect } from "react-redux";
import { signOut } from "../actions";
import * as ROUTES from "../router/routes";
import PropTypes from "prop-types";
const ProfileDropDown = (props) => {

    return (
        <DropDownComp >
            <DropDownComp.Button>
                <i className="fas fa-user-circle" />{props.auth.user.Email}
            </DropDownComp.Button>
            <DropDownComp.DropDownContent >
                <DropDownComp.List>
                    <DropDownComp.LinkItem to={ROUTES.PROFILE}>Profile</DropDownComp.LinkItem>
                    <DropDownComp.LinkItem to="">History</DropDownComp.LinkItem>
                    <DropDownComp.LinkItem to="">Setting</DropDownComp.LinkItem>
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