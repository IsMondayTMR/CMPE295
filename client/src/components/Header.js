import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { HeaderComp } from "../styledComponents/export";
import Authorization from "./Authorization";
import ProfileDropDown from "./ProfileDropDown";
import { connect } from "react-redux";
import Search from "./Search";
import history from "../history";

import * as ROUTES from "../router/routes";

class Header extends React.Component {
    state = { hide: true, match: history.location.pathname.includes("/search/") || history.location.pathname.includes("/profile"), dropdownHide: true };

    closeForm = () => {
        this.setState({ hide: true });
    };

    renderModal = () => {
        return ReactDOM.createPortal(
            <Authorization hide={this.state.hide} closeHelper={this.closeForm} />,
            document.querySelector("#modal"));
    };

    renderSearch = () => {
        if (this.state.match) {
            return <Search height="45px" width="30%" fontSize="15px" border="1px solid #969696" />;
        }

    };

    componentDidMount() {
        history.listen(() => { this.setState({ match: history.location.pathname.includes("/search/") || history.location.pathname.includes("/profile") }); });
    }




    renderAuthButton = () => {
        if (this.props.user.status) {
            return (

                <HeaderComp.RightPanel>
                    <HeaderComp.HeaderLinkContainer to={ROUTES.MESSAGE}>
                        <HeaderComp.Icon className="far fa-comment-alt" />
                        <HeaderComp.Text>Message</HeaderComp.Text>

                    </HeaderComp.HeaderLinkContainer>

                    <HeaderComp.HeaderLinkContainer to={`${ROUTES.PROFILE}/favorite`}>
                        <HeaderComp.Icon className="far fa-heart" />
                        <HeaderComp.Text>Favorite</HeaderComp.Text>
                    </HeaderComp.HeaderLinkContainer>

                    <HeaderComp.HeaderLinkContainer to={`${ROUTES.PROFILE}/listing`}>
                        <HeaderComp.Icon className="fas fa-coins" />
                        <HeaderComp.Text>Listing</HeaderComp.Text>
                    </HeaderComp.HeaderLinkContainer>
                    {/* <HeaderComp.Icon className="fas fa-user-circle" /> */}
                    {/* <HeaderComp.TextButton onClick={() => this.props.signOut(this.props.auth)} >Sign Out</HeaderComp.TextButton> */}
                    <ProfileDropDown />
                </HeaderComp.RightPanel >);
        }
        return (
            <HeaderComp.RightPanel>

                <HeaderComp.HeaderLinkContainer to={ROUTES.ABOUT}>
                    <HeaderComp.Text>About</HeaderComp.Text>
                </HeaderComp.HeaderLinkContainer>

                <HeaderComp.HeaderLinkContainer to={ROUTES.SUPPORT}>
                    <HeaderComp.Text>Support</HeaderComp.Text>
                </HeaderComp.HeaderLinkContainer>
                <HeaderComp.TextButton onClick={() => this.setState({ hide: false })} >Login</HeaderComp.TextButton>
                {this.renderModal()}
                <HeaderComp.Button>Contact</HeaderComp.Button>
            </HeaderComp.RightPanel>);

    };
    render() {
        return (
            <HeaderComp>
                <HeaderComp.Content>
                    <HeaderComp.WebsiteIcon to="/">Mock Website</HeaderComp.WebsiteIcon>
                    {this.renderSearch()}
                    {this.renderAuthButton()}
                </HeaderComp.Content>
            </HeaderComp>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

Header.propTypes = {
    user: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(Header);