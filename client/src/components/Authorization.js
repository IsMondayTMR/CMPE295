import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FormComp } from "../styledComponents/export";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { createUser, signIn, getUser } from "../actions";
import * as Utils from "../utils/validation";
import { fb } from "../service";
import UserImage from "../resources/defaultAvatar.png";
// import ExternalAuth from "./ExternalAuth";

class Authorization extends React.Component {
    state = { signInActive: true, radioSelect: false, image: null, imagePreviewUrl: null, progress: 0, imageUrl: null, };

    signInFormValidate = () => this.props.signInEmail === "" || this.props.signInPassword === "";
    registerFormValidate = () => this.props.registerEmail === "" || this.props.registerPassword === "" || !Utils.validatePass(this.props.registerPassword);

    renderRegisterField = ({ input, name, label, text, type, meta }) => {

        let validate = type === "email" ? !Utils.validateEmail(this.props.registerEmail) : !Utils.validatePass(this.props.registerPassword);
        let touched = meta.touched ? validate : meta.touched;

        const hints = type === "email" ? null : <FormComp.HintContainer showHints={touched}>
            <FormComp.PasswordHint
                check={Utils.checkLength(this.props.registerPassword)}>
                At least 8 characters
            </FormComp.PasswordHint>
            <FormComp.PasswordHint
                check={Utils.checkLetterAndNumber(this.props.registerPassword)}>
                Mix of letters and numbers
            </FormComp.PasswordHint>
            <FormComp.PasswordHint
                check={Utils.checkSpecial(this.props.registerPassword)}>
                At least 1 special character
            </FormComp.PasswordHint>
            <FormComp.PasswordHint
                check={Utils.checkUpperLower(this.props.registerPassword)}>
                At least 1 lowercase letter and 1 uppercase letter
            </FormComp.PasswordHint>
        </FormComp.HintContainer>;

        return (
            <>
                <FormComp.InputContainer >
                    <FormComp.Label htmlFor={name} form={"login"}>{label}</FormComp.Label>
                    <FormComp.Input type={type} placeholder={text} name={name} id={name} {...input} touched={touched} />
                </FormComp.InputContainer>
                {hints}
            </>
        );
    };

    renderSignInField = ({ input, name, label, text, type }) => {
        return (
            <FormComp.InputContainer >
                <FormComp.Label form={"login"}>{label}</FormComp.Label>
                <FormComp.Input type={type} placeholder={text} name={name} id={name} {...input} />
            </FormComp.InputContainer>
        );
    };

    renderGenderSelector = ({ input, name, text, type, select, onClick }) => {
        return (
            <FormComp.RadioLabel>
                <FormComp.RadioInput
                    type={type}
                    placeholder={text}
                    value={input.value}
                    name={name}
                    id={name}
                    check={select}
                    onClick={onClick}
                    {...input} />
                {input.value}
            </FormComp.RadioLabel>
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

    renderAddress = ({ input, name, text, width, margin, type }) => {
        return (
            <FormComp.Input type={type} width={width} margin={margin} placeholder={text} name={name} id={name} {...input} />
        );
    };

    renderRegisterForm = () => {
        return (
            <FormComp.Form
                onSubmit={this.props.handleSubmit(this.onRegisterFormSubmit)}
                data-test="register-form">
                <FormComp.FormContainer>
                    <FormComp.ImageGroup>
                        <FormComp.AvatarPreview src={this.state.imagePreviewUrl ? this.state.imagePreviewUrl[0] : UserImage} />
                        <FormComp.FileInputLabel htmlFor="upload">
                            <i className="fa-solid fa-camera"></i>
                            <FormComp.FileInput id="upload" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleImageChange} />
                        </FormComp.FileInputLabel>

                    </FormComp.ImageGroup>
                    <Field
                        component={this.renderSignInField}
                        label="Username"
                        text='Enter Username'
                        type="text"
                        name="username"
                        data-test="sign-in-username-input" />
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
                    <Field
                        component={this.renderSignInField}
                        label="Name"
                        text='Enter Name'
                        type="text"
                        name="name"
                        data-test="sign-in-name-input" />
                    <Field
                        component={this.renderSignInField}
                        label="Phone Number"
                        text='Enter Phone Number'
                        type="tel"
                        name="phone_number"
                        data-test="sign-in-phone-input" />

                    <FormComp.InputContainer>
                        <FormComp.Label >Gender</FormComp.Label>
                        <FormComp.RadioGroup>
                            <Field
                                component={this.renderGenderSelector}
                                label="Gender"
                                type="radio"
                                name="gender"
                                value="male"
                                select={this.state.radioSelect}
                                onClick={() => this.setState({ radioSelect: false })}
                                data-test="sign-in-gender-input" />
                            <Field
                                component={this.renderGenderSelector}
                                label="Gender"
                                type="radio"
                                name="gender"
                                value="female"
                                select={this.state.radioSelect}
                                onClick={() => this.setState({ radioSelect: true })}
                                data-test="sign-in-gender-input" />
                        </FormComp.RadioGroup>
                    </FormComp.InputContainer>
                    <Field
                        component={this.renderSignInField}
                        label="Address"
                        text='Street'
                        type="street"
                        name="street"
                        data-test="sign-in-street-input" />
                    <FormComp.AddressContainer>
                        <Field
                            component={this.renderAddress}
                            label="Address"
                            text='City'
                            type="city"
                            name="city"
                            width="150px"

                            data-test="sign-in-city-input" />
                        <Field
                            component={this.renderAddress}
                            label="Address"
                            text='State'
                            type="state"
                            name="state"
                            width="70px"

                            data-test="sign-in-state-input" />
                        <Field
                            component={this.renderAddress}
                            label="Zip"
                            text='Zip'
                            type="zip"
                            name="zip"
                            width="100px"
                            data-test="sign-in-zip-input" />
                    </FormComp.AddressContainer>
                </FormComp.FormContainer>
                <FormComp.SubmitButton
                    disabled={this.registerFormValidate()}
                    data-test="register-btn">
                    Register
                </FormComp.SubmitButton>
            </FormComp.Form >
        );
    };

    handleImageChange = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onload = () => {
            this.setState({
                image: event.target.files[0],
                imagePreviewUrl: [reader.result]
            });
        };

        reader.readAsDataURL(file);
    };

    onSigninFormSubmit = (formValues) => {
        this.props.signIn(formValues)
            .then(() => {
                this.props.getUser()
                    .then(() => {
                        this.props.closeHelper();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
    };

    onRegisterFormSubmit = (formValues) => {
        if (this.state.image == null) {
            const defImg = `${process.env.REACT_APP_DEFAULT_AVATAR}`;
            this.props.createUser(formValues, defImg);
            this.setState({ signInActive: true });
            return;
        }
        const uploadTask = fb.storage.ref(`avatars/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progres: progress });
            },
            error => {
                console.log(error);
            },
            () => {
                fb.storage
                    .ref("avatars")
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ imageUrl: url });
                        console.log(this.state.imageUrl);
                    }).then(((res) => {
                        console.log(res);
                        this.props.createUser(formValues, this.state.imageUrl);
                        this.setState({ signInActive: true });
                    }));
            }
        );
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
                        {/* <FormComp.Line />
                        <FormComp.ConnectText
                            data-test="connect-text">
                            Or connect with
                        </FormComp.ConnectText> */}
                        {/* <ExternalAuth /> */}
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
    getUser: PropTypes.func.isRequired,
    closeHelper: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};
export default connect(mapStateToProps, { createUser, signIn, getUser })(formWrapped);