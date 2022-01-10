import React from 'react'
import { FormComp } from '../styledComponents/export'
import { reduxForm, Field, formValueSelector} from 'redux-form'
import { connect } from 'react-redux'
import { createUser, signIn } from '../actions'
import * as Utils from '../utils/validation'
import ExternalAuth from './ExternalAuth'

class Authorization extends React.Component {

    state = {signInActive: true}
    registerPass = this.props.registerPassword === undefined ? '' : this.props.registerPassword
    
    signInFormValidate = () => this.props.signInEmail === undefined || this.props.signInPassword === undefined
    registerFormValidate = () => this.props.registerEmail === undefined || this.props.registerPassword === undefined

    renderRegisterField = ({input,name, label, text, type, meta}) => {

        let validate = type === "email" ? !Utils.validateEmail(this.props.registerEmail) : !Utils.validatePass(this.props.registerPassword);
        
        let touched = meta.touched ? validate : meta.touched
        return ( 
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.Input type = {type} placeholder = {text} name = {name} id = {name} {...input} touched = {touched}/>
            </FormComp.InputContainer>
        )
    }

    renderSignInField = ({input,name, label, text, type}) => {
        return ( 
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.Input type = {type} placeholder = {text} name = {name} id = {name} {...input}/>
            </FormComp.InputContainer>
        )
    }

    renderSignInForm() {
        return(
            <FormComp.Form active = {this.state.signInActive ? 'block' : 'none'} onSubmit = {this.props.handleSubmit(this.onSigninFormSubmit)}>
                <FormComp.InputContainer>
                    <Field name = "signInEmail" component = {this.renderSignInField} label = "Email" text = 'Enter Email' type = 'email'/>
                    <Field name = "signInPassword" component = {this.renderSignInField} label = "Password" text = 'Enter Password' type = 'password'/>
                    <FormComp.SubmitButton name = "signInButton" disabled ={this.signInFormValidate()}>Sign In</FormComp.SubmitButton>
                </FormComp.InputContainer>
            </FormComp.Form>
        )
    }

    renderRegisterForm() {

        return(
            <FormComp.Form active = {this.state.signInActive ? 'none' : 'block'} onSubmit = {this.props.handleSubmit(this.onRegisterFormSubmit)}>
                    <FormComp.InputContainer>
                        <Field name = "registerEmail" component = {this.renderRegisterField} label = "Email" text = 'Enter Email' type = 'email'/>
                        <Field name = "registerPassword" component = {this.renderRegisterField} label = "Password" text = 'Enter Password' type = 'password'/>

                        <FormComp.HintContainer>
                            <FormComp.PasswordHint 
                                check = {Utils.checkLength(this.props.registerPassword)}>
                                    At least 8 characters
                            </FormComp.PasswordHint>
                            <FormComp.PasswordHint 
                                check = {Utils.checkSpecial(this.props.registerPassword)}>
                                    Mix of letters and numbers
                            </FormComp.PasswordHint>
                            <FormComp.PasswordHint 
                                check = {Utils.checkLetterAndNumber(this.props.registerPassword)}>
                                    At least 1 special character
                            </FormComp.PasswordHint>
                            <FormComp.PasswordHint 
                                check = {Utils.checkUpperLower(this.props.registerPassword)}>
                                    At least 1 lowercase letter and 1 uppercase letter
                            </FormComp.PasswordHint>
                        </FormComp.HintContainer>
                        
                            <FormComp.SubmitButton name = "registerButton" disabled ={this.registerFormValidate()}>Register</FormComp.SubmitButton>
                    </FormComp.InputContainer>
            </FormComp.Form>
        )
    }

    onRegisterFormSubmit = (formValues) => {
        this.props.createUser(formValues)
        this.setState({signInActive: true})
    }

    onSigninFormSubmit = (formValues) => {
        this.props.signIn(formValues)
        this.props.closeHelper()
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
                            borderActive = {this.state.signInActive ? "3px solid #1995ff" : "none"} name = "tabButton">Sign In</FormComp.TabButton>
                        <FormComp.TabButton 
                            onClick = {() => this.setState({signInActive: false})} 
                            borderActive = {!this.state.signInActive ? "3px solid #1995ff" : "none"} name = "tabButton">New Account</FormComp.TabButton>
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
const selector = formValueSelector('Authorization')
const mapStateToProps = (state) => {
    
    return {
        signInEmail: selector(state, 'signInEmail'),
        signInPassword: selector(state, 'signInPassword'),
        registerEmail: selector(state, 'registerEmail'),
        registerPassword: selector(state, 'registerPassword')
    }
}
export default connect(mapStateToProps, { createUser, signIn })(formWrapped)