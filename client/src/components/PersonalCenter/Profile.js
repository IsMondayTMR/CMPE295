import React from "react";
import { ProfileComp, FormComp } from "../../styledComponents/export";
import UserImage from "../../resources/userImage.png";
// import { uploadImage } from "../../utils/imageUploader";
import { fb } from "../../service";
import { update, getUser } from "../../actions";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Profile extends React.Component {

    state = { image: null, imagePreviewUrl: [this.props.user[10]?.Value], progress: 0, hide: true };

    componentDidMount() {
        this.props.initialize({
            username: this.props.user[7]?.Value,
            phone_number: this.props.user[8]?.Value,
            street: this.props.user[1]?.Value,
            city: this.props.user[6]?.Value,
            state: this.props.user[5]?.Value
        });
    }


    handleChange = (event) => {
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

    renderEditField = ({ input, name, label, text, type }) => {
        return (
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.Input type={type} placeholder={text} name={name} id={name} {...input} />
            </FormComp.InputContainer>
        );
    };

    renderUploadField = ({ input, name, label, type, handleChange }) => {
        return (
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.FileInput type={type} name={name} id={name} value={this.state.image} handleChange={handleChange} fileType="image/x-png,image/gif,image/jpeg" {...input} />
                <FormComp.AvatarPreview src={this.state.imagePreviewUrl ? this.state.imagePreviewUrl[0] : UserImage} />
            </FormComp.InputContainer>
        );
    };

    onUpdateFormSubmit = (formValues) => {
        console.log(formValues);
        if (this.state.image == null || !this.state.image) {
            this.props.update(formValues, this.state.imagePreviewUrl[0], this.props.session?.accessToken?.jwtToken, this.props.user[9]?.Value)
                .then(() => this.props.getUser())
                .then(() => this.setState({ hide: true }));
            return;
        }
        // uploadImage("avatars", this.state.image, formValues, this.props.session.accessToken, this.props.user[9]?.Value);
        const uploadTask = fb.storage.ref(`avatars/${this.state.image.name}`).put(this.state.image);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
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
                        this.props.update(formValues, url, this.props.session?.accessToken?.jwtToken, this.props.user[9]?.Value);
                    })
                    .then(() => this.props.getUser())
                    .then(() => this.setState({ hide: true }));
            });
    };

    renderAddress = ({ input, name, text, width, margin, type }) => {
        return (
            <FormComp.Input type={type} width={width} margin={margin} placeholder={text} name={name} id={name} {...input} />
        );
    };


    renderForm() {

        return <React.Fragment>
            <FormComp hide={this.state.hide ? "none" : "block"}>
                <FormComp.CloseButton
                    onClick={() => this.setState({ hide: true })}
                    data-test="close-btn" />
                <FormComp.Form
                    onSubmit={this.props.handleSubmit(this.onUpdateFormSubmit)}>

                    <FormComp.ImageGroup>
                        <FormComp.AvatarPreview src={this.state.imagePreviewUrl ? this.state.imagePreviewUrl[0] : UserImage} alt="User Image" />
                        <FormComp.FileInputLabel htmlFor="upload">
                            <i className="fa-solid fa-camera"></i>
                            <FormComp.FileInput
                                id="upload"
                                type="file"
                                accept="image/x-png,image/gif,image/jpeg"
                                onChange={this.handleImageChange} />
                        </FormComp.FileInputLabel>
                    </FormComp.ImageGroup>

                    <FormComp.InputContainer>
                        <Field
                            component={this.renderEditField}
                            label="Username"
                            text="username"
                            type="text"
                            name="username" />
                        <Field
                            component={this.renderEditField}
                            label="Phone"
                            text="Phone"
                            type="tel"
                            name="phone_number" />
                        <Field
                            component={this.renderEditField}
                            label="Address"
                            text="street"

                            type="street"
                            name="street"
                            data-test="sign-in-street-input" />
                        <FormComp.AddressContainer>
                            <Field
                                component={this.renderAddress}
                                label="Address"
                                text="city"
                                type="city"
                                name="city"
                                width="150px"
                                data-test="sign-in-city-input" />
                            <Field
                                component={this.renderAddress}
                                label="Address"
                                text="state"
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
                        <FormComp.SubmitButton >
                            Submit
                        </FormComp.SubmitButton>
                    </FormComp.InputContainer>
                </FormComp.Form>
            </FormComp>
            <FormComp.Modal hide={this.state.hide ? "none" : "block"} />
        </React.Fragment>;

    }


    handleImageChange = async (event) => {
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

    render() {
        console.log(this.props.user);
        return <ProfileComp.ContentContainer>

            <ProfileComp.ImageContainer>

                <ProfileComp.Image src={this.state.imagePreviewUrl ? this.state.imagePreviewUrl[0] : UserImage} alt="User Image" />

            </ProfileComp.ImageContainer>
            <ProfileComp.UserName>{`${this.props?.user[7]?.Value}`} </ProfileComp.UserName>
            <ProfileComp.InputContainer>
                <ProfileComp.InputGroup>
                    <ProfileComp.Label>Email</ProfileComp.Label>
                    <ProfileComp.Input value={`${this.props?.user[9]?.Value}`} disabled />
                </ProfileComp.InputGroup>
                <ProfileComp.InputGroup>
                    <ProfileComp.Label>Phone Number</ProfileComp.Label>
                    <ProfileComp.Input value={`${this.props?.user[8]?.Value.substring(2)}`} disabled />
                </ProfileComp.InputGroup>


                <ProfileComp.InputGroup >
                    <ProfileComp.Label>Address</ProfileComp.Label>
                    <ProfileComp.Input type="address" value={`${this.props?.user[1]?.Value}`} name="street" id="street" data-test="sign-in-city-input" disabled />
                </ProfileComp.InputGroup>

                <ProfileComp.InputGroup>
                    <ProfileComp.Label></ProfileComp.Label>
                    <ProfileComp.Input type="city" width="150px" value={`${this.props?.user[6]?.Value}`} name="city" id="city" data-test="sign-in-city-input" disabled />
                    <ProfileComp.Input type="state" width="70px" value={`${this.props?.user[5]?.Value}`} name="state" id="state" data-test="sign-in-state-input" disabled />
                    <ProfileComp.Input type="zip" width="100px" value={"95555"} name="zip" id="zip" data-test="sign-in-state-input" disabled />
                </ProfileComp.InputGroup>

                <ProfileComp.InputGroup>
                    <ProfileComp.Label>Description</ProfileComp.Label>
                    <ProfileComp.TextArea maxLength="50" value="This person is lazy" disabled />
                </ProfileComp.InputGroup>
            </ProfileComp.InputContainer>
            <ProfileComp.EditButton onClick={() => this.setState({ hide: false })} > Edit</ProfileComp.EditButton>

            {this.renderForm()}
        </ProfileComp.ContentContainer >;
    }

}

Profile.propTypes = {
    handleSubmit: PropTypes.func,
    user: PropTypes.array,
    session: PropTypes.object,
    update: PropTypes.func.isRequired,
    initialize: PropTypes.func,
    getUser: PropTypes.func
};
const formWrapped = reduxForm({
    form: "Profile",
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(Profile);
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        session: state.user.session,
    };
};


export default connect(mapStateToProps, { update, getUser })(formWrapped);