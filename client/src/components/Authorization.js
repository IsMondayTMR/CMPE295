import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FormComp } from "../styledComponents/export";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { createUser, signIn } from "../actions";
import * as Utils from "../utils/validation";
import ExternalAuth from "./ExternalAuth";

class Authorization extends React.Component {
    state = { signInActive: true };

    signInFormValidate = () => this.props.signInEmail === "" || this.props.signInPassword === "";
    registerFormValidate = () => this.props.registerEmail === "" || this.props.registerPassword === "" || !Utils.validatePass(this.props.registerPassword);

    renderRegisterField = ({ input, name, label, text, type, meta }) => {

        let validate = type === "email" ? !Utils.validateEmail(this.props.registerEmail) : !Utils.validatePass(this.props.registerPassword);
        let touched = meta.touched ? validate : meta.touched;

        return (
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.Input type={type} placeholder={text} name={name} id={name} {...input} touched={touched} />
            </FormComp.InputContainer>
        );
    };

    renderSignInField = ({ input, name, label, text, type }) => {
        return (
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.Input type={type} placeholder={text} name={name} id={name} {...input} />
            </FormComp.InputContainer>
        );
    };

    renderSignInForm = () => {
        return (
            <FormComp.Form
                active={this.state.signInActive ? "block" : "none"}
                onSubmit={this.props.handleSubmit(this.onSigninFormSubmit)}
                data-test="sign-in-form">
                <FormComp.InputContainer>
                    <Field
                        component={this.renderSignInField}
                        label="Email"
                        text='Enter Email'
                        type="email"
                        name="signInEmail"
                        data-test="sign-in-email-input" />
                    <Field
                        component={this.renderSignInField}
                        label="Password"
                        text="Enter Password"
                        type="password"
                        name="signInPassword"
                        data-test="sign-in-password-input" />
                    <FormComp.SubmitButton
                        disabled={this.signInFormValidate()}
                        data-test="sign-in-btn">
                        Sign In
                    </FormComp.SubmitButton>
                </FormComp.InputContainer>
            </FormComp.Form>
        );
    };

    renderRegisterForm = () => {
        return (
            <FormComp.Form
                onSubmit={this.props.handleSubmit(this.onRegisterFormSubmit)}
                data-test="register-form">
                <FormComp.InputContainer>
                    <Field
                        component={this.renderRegisterField}
                        label="Email"
                        text='Enter Email'
                        type='email'
                        name='registerEmail'
                        data-test="register-email-input" />
                    <Field
                        component={this.renderRegisterField}
                        label="Password"
                        text='Enter Password'
                        type='password'
                        name='registerPassword'
                        data-test="register-password-input" />
                    <FormComp.HintContainer>
                        <FormComp.PasswordHint
                            check={Utils.checkLength(this.props.registerPassword)}>
                            At least 8 characters
                        </FormComp.PasswordHint>
                        <FormComp.PasswordHint
                            check={Utils.checkSpecial(this.props.registerPassword)}>
                            Mix of letters and numbers
                        </FormComp.PasswordHint>
                        <FormComp.PasswordHint
                            check={Utils.checkLetterAndNumber(this.props.registerPassword)}>
                            At least 1 special character
                        </FormComp.PasswordHint>
                        <FormComp.PasswordHint
                            check={Utils.checkUpperLower(this.props.registerPassword)}>
                            At least 1 lowercase letter and 1 uppercase letter
                        </FormComp.PasswordHint>
                    </FormComp.HintContainer>
                    <FormComp.SubmitButton
                        disabled={this.registerFormValidate()}
                        data-test="register-btn">
                        Register
                    </FormComp.SubmitButton>
                </FormComp.InputContainer>
            </FormComp.Form>
        );
    };

    onRegisterFormSubmit = (formValues) => {
        this.props.createUser(formValues);
        this.setState({ signInActive: true });
    };

    onSigninFormSubmit = (formValues) => {
        this.props.signIn(formValues);
        this.props.closeHelper();
    };

    render() {
        return (
            <Fragment >
                <FormComp
                    hide={this.props.hide ? "none" : "block"}
                    data-test="auth-form">
                    <FormComp.CloseButton
                        onClick={() => this.props.closeHelper()}
                        data-test="close-btn" />
                    <FormComp.Container>
                        <FormComp.Header data-test="header">Welcome To Mock</FormComp.Header>
                        <FormComp.TabButtonContainer>
                            <FormComp.TabButton
                                onClick={() => this.setState({ signInActive: true })}
                                borderActive={this.state.signInActive ? "3px solid #1995ff" : "none"}
                                data-test="sign-in-tab-btn">
                                Sign In
                            </FormComp.TabButton>
                            <FormComp.TabButton
                                onClick={() => this.setState({ signInActive: false })}
                                borderActive={!this.state.signInActive ? "3px solid #1995ff" : "none"}
                                data-test="register-tab-btn">
                                New Account
                            </FormComp.TabButton>
                        </FormComp.TabButtonContainer>
                        <FormComp.Line />
                        {this.state.signInActive ? this.renderSignInForm() : this.renderRegisterForm()}
                        <FormComp.Line />
                        <FormComp.ConnectText
                            data-test="connect-text">
                            Or connect with
                        </FormComp.ConnectText>
                        <ExternalAuth />
                    </FormComp.Container>
                </FormComp>
                <FormComp.Modal
                    hide={this.props.hide ? "none" : "block"}
                    onClick={() => this.props.closeHelper()} />
            </Fragment>
        );
    }
}

const formWrapped = reduxForm({ form: "Authorization" })(Authorization);
const selector = formValueSelector("Authorization");
const mapStateToProps = (state) => {
    return {
        signInEmail: selector(state, "signInEmail") === undefined ? "" : selector(state, "signInEmail"),
        signInPassword: selector(state, "signInPassword") === undefined ? "" : selector(state, "signInEmail"),
        registerEmail: selector(state, "registerEmail") === undefined ? "" : selector(state, "registerEmail"),
        registerPassword: selector(state, "registerPassword") === undefined ? "" : selector(state, "registerPassword")
    };
};

Authorization.propTypes = {
    signInEmail: PropTypes.string.isRequired,
    signInPassword: PropTypes.string.isRequired,
    registerEmail: PropTypes.string.isRequired,
    registerPassword: PropTypes.string.isRequired,
    hide: PropTypes.bool.isRequired,
    createUser: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    closeHelper: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};
export default connect(mapStateToProps, { createUser, signIn })(formWrapped);