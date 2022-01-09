import React from 'react'
import { FormComp } from '../styledComponents/export'
import { reduxForm, Field} from 'redux-form'
import { connect } from 'react-redux'
import { createUser, signIn } from '../actions'
import ExternalAuth from './ExternalAuth'

class Authorization extends React.Component {

    state = {signInActive: true}
    renderSignInField = ({input, label, text, type}) => {
        return (
            
            <FormComp.InputContainer>
                <FormComp.Label>{label}</FormComp.Label>
                <FormComp.Input {...input} type = {type} placeholder = {text}/>
                
            </FormComp.InputContainer>
        )
    }

    renderSignInForm() {
        return(
            <FormComp.Form active = {this.state.signInActive ? 'block' : 'none'} onSubmit = {this.props.handleSubmit(this.onSigninFormSubmit)}>
                    <FormComp.InputContainer>
                        <Field name = "signInEmail" component = {this.renderSignInField} label = "Email" text = 'Enter Email' type = 'email'/>
                        <Field name = "signInpassword" component = {this.renderSignInField} label = "Password" text = 'Enter Password' type = 'password'/>
                        <FormComp.SubmitButton>Sign In</FormComp.SubmitButton>
                    </FormComp.InputContainer>
                </FormComp.Form>
        )
    }

    renderRegisterForm() {
        return(
            <FormComp.Form active = {this.state.signInActive ? 'none' : 'block'} onSubmit = {this.props.handleSubmit(this.onRegisterFormSubmit)}>
                    <FormComp.InputContainer>
                        <Field name = "registerEmail" component = {this.renderSignInField} label = "Email" text = 'Enter Email' type = 'email'/>
                        <Field name = "registerPassword" component = {this.renderSignInField} label = "Password" text = 'Enter Password' type = 'password'/>

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

    onRegisterFormSubmit = (formValues) => {
        this.props.createUser(formValues)
    }

    onSigninFormSubmit = (formValues) => {
        this.props.signIn(formValues)
    }
    render () {
        return (
        <>
            <FormComp hide = {this.props.hide ? "none" : "block" }>
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

                    <ExternalAuth/>
                    
                </FormComp.Container>
            </FormComp>
            <FormComp.Modal hide = {this.props.hide ? "none" : "block"} onClick = {() => this.props.closeHelper()}></FormComp.Modal>
        </>
        )
    }
    
}

const formWrapped = reduxForm({form: 'Authorization'})(Authorization)


export default connect(null, { createUser, signIn })(formWrapped)