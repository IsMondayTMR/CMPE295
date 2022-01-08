import React from 'react'
import { ExternalAuthComp } from '../styledComponents/export'
import * as gapi from '../const/google'
import { googleSignIn } from '../actions/index'
import { connect } from 'react-redux'
const IconStyle = {
    fontSize: "20px",
    position: 'absolute',
    left: '100px',
}

const GoogleIconStyle = {
    fontSize: "20px",
    position: 'absolute',
    left: '100px',
    color: '#21d3ff',
}

class ExternalAuth extends React.Component {

    onGoogleSignInClick = () => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: gapi.ClientID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.auth.signIn()
                this.props.googleSignIn(this.auth)
            })
        })

    }


    render() {
        return (
            <ExternalAuthComp>

                <ExternalAuthComp.Button backgroundColor = "black" color = "white">
                    <i className="fab fa-apple" style={IconStyle}></i>  
                    Connect with Apple
                </ExternalAuthComp.Button>

                <ExternalAuthComp.Button backgroundColor = "#005eff" color = "white">
                    <i className="fab fa-facebook" style={IconStyle}></i>  
                    Connect with Facebook
                </ExternalAuthComp.Button>

                <ExternalAuthComp.Button backgroundColor = "white" color = "black" onClick = {() => this.onGoogleSignInClick()}>
                    <i className="fab fa-google" style={GoogleIconStyle}></i>  
                    Connect with Google
                </ExternalAuthComp.Button>

            </ExternalAuthComp>
        )
    }
}


export default connect(null, { googleSignIn })(ExternalAuth)