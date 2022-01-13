import React from "react";
import ReactDOM from "react-dom";
import { HeaderComp } from "../styledComponents/export";
import Authorization from "./Authorization";
import { connect } from "react-redux";
import { signOut } from "../actions";

import * as ROUTES from "../router/routes";
class Header extends React.Component {
    state = { hide: true }

    closeForm = () => {
        this.setState({ hide: true })
    }

    renderModal = () => {
        return ReactDOM.createPortal(
            <Authorization hide={this.state.hide} closeHelper={this.closeForm} />,
            document.querySelector('#modal')
        )
    }

    renderAuthButton = () => {

        if (this.props.auth.isSignedIn === true) {
            // console.log(this.props)
            return (
                <HeaderComp.RightPanel>
                    <HeaderComp.LinkText to=''>Message</HeaderComp.LinkText>
                    <HeaderComp.LinkText to=''>Favorite</HeaderComp.LinkText>
                    <HeaderComp.LinkText to=''>Listing</HeaderComp.LinkText>
                    {/* <img src= {this.props.auth.user.ImageURL}alt="user img" width="40" height="40"/> */}
                    <HeaderComp.TextButton onClick={() => this.props.signOut(this.props.auth)} >Sign Out</HeaderComp.TextButton>
                </HeaderComp.RightPanel>)
        } else {
            return (
                <HeaderComp.RightPanel>
                    <HeaderComp.LinkText to={ROUTES.ABOUT}>About</HeaderComp.LinkText>
                    <HeaderComp.LinkText to={ROUTES.SUPPORT}>Support</HeaderComp.LinkText>
                    <HeaderComp.TextButton onClick={() => this.setState({ hide: false })} >Login</HeaderComp.TextButton>
                    {this.renderModal()}
                    <HeaderComp.Button>Contact</HeaderComp.Button>
                </HeaderComp.RightPanel>)
        }
    }
    render() {
        return (
            <HeaderComp>
                <HeaderComp.Content>
                    <HeaderComp.WebsiteIcon to='/'>Mock Website</HeaderComp.WebsiteIcon>
                    {this.renderAuthButton()}
                </HeaderComp.Content>

            </HeaderComp>

        )
    }

}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}
export default connect(mapStateToProps, { signOut })(Header)