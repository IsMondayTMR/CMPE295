import React from 'react'
import { FormComp, ExternalAuth } from '../styledComponents/export'
import { reduxForm, Field} from 'redux-form'

const IconStyle = {
    fontSize: "20px",
    position: 'absolute',
    left: '100px',
}


class Authorization extends React.Component {

    state = {signInActive: true}
    renderSignInField = ({input, label, text, type, meta}) => {
        return (
            
            <FormComp.InputContainer>
                <FormComp.Label>{label}</FormComp.Label>
                <FormComp.Input {...input} type = {type} placeholder = {text}/>
                
            </FormComp.InputContainer>
        )
    }

    renderSignInForm() {
        return(
            <FormComp.Form active = {this.state.signInActive ? 'block' : 'none'}>
                    <FormComp.InputContainer>
                        <Field name = "email" component = {this.renderSignInField} label = "Email" text = 'Enter Email' type = 'email'/>
                        <Field name = "password" component = {this.renderSignInField} label = "Password" text = 'Enter Password' type = 'password'/>
                        <FormComp.SubmitButton>Sign In</FormComp.SubmitButton>
                    </FormComp.InputContainer>
                </FormComp.Form>
        )
    }

    renderRegisterForm() {
        return(
            <FormComp.Form active = {this.state.signInActive ? 'none' : 'block'}>
                    <FormComp.InputContainer>
                        <Field name = "email" component = {this.renderSignInField} label = "Email" text = 'Enter Email' type = 'email'/>
                        <Field name = "password" component = {this.renderSignInField} label = "Password" text = 'Enter Password' type = 'password'/>

                        <FormComp.HintContainer>
                            <FormComp.PasswordHint>At least 8 characters</FormComp.PasswordHint>
                            <FormComp.PasswordHint>Mix of letters and numbers</FormComp.PasswordHint>
                            <FormComp.PasswordHint>At least 1 special character</FormComp.PasswordHint>
                            <FormComp.PasswordHint>At least 1 lowercase letter and 1 uppercase letter</FormComp.PasswordHint>
                            
                        </FormComp.HintContainer>
                            <FormComp.SubmitButton>Register</FormComp.SubmitButton>
                    </FormComp.InputContainer>
            </FormComp.Form>
        )
    }


    render () {
        return (
        <FormComp hide = {this.props.hide ? "none" : "block"}>
                <FormComp.CloseButton onClick = {() => this.props.closeHelper()}/>
            <FormComp.Container>
                
                <FormComp.Header> Welcome To Mock </FormComp.Header>

                <FormComp.TabButtonContainer>
                    <FormComp.TabButton 
                        onClick = {() => this.setState({signInActive: true})} 
                        borderActive = {this.state.signInActive ? "3px solid #1995ff" : "none"}>Sign In</FormComp.TabButton>
                    <FormComp.TabButton 
                        onClick = {() => this.setState({signInActive: false})} 
                        borderActive = {!this.state.signInActive ? "3px solid #1995ff" : "none"}>New Account</FormComp.TabButton>
                </FormComp.TabButtonContainer>

                <FormComp.Line />

                    {this.renderRegisterForm()}
                    {this.renderSignInForm()}
                <FormComp.Line />
                <FormComp.ConnectText>Or connect with</FormComp.ConnectText>

                <ExternalAuth>

                    <ExternalAuth.Button backgroundColor = "black" color = "white">
                        <i className="fab fa-apple" style={IconStyle}></i>  
                        Connect with Apple
                    </ExternalAuth.Button>

                    <ExternalAuth.Button backgroundColor = "#005eff" color = "white">
                        <i className="fab fa-facebook" style={IconStyle}></i>  
                        Connect with Facebook
                    </ExternalAuth.Button>

                    <ExternalAuth.Button backgroundColor = "white" color = "black">
                        <i className="fab fa-google" style={IconStyle}></i>  
                        Connect with Google
                    </ExternalAuth.Button>

                </ExternalAuth>
            </FormComp.Container>
        </FormComp>
        )
    }
    
}

export default reduxForm({form: 'Authorization'})(Authorization)