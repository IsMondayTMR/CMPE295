import React from "react";
import { ProfileComp, FormComp } from "../../styledComponents/export";
import UserImage from "../../resources/userImage.png";
// import { uploadImage } from "../../utils/imageUploader";
import { phoneFormatter, phoneParser } from "../../utils/formater";
import { fb } from "../../service";
import { update, getUser } from "../../actions";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Profile extends React.Component {

    state = { image: null, imagePreviewUrl: "", email: "", phone_number: "", street: "", city: "", state: "", zip: "", username: "", progress: 0, hide: true };

    componentDidMount() {
        if (this.props?.user != null) {
            this.props?.user?.forEach(element => {
                if (element.Name == "email") this.setState({ email: element.Value });
                if (element.Name == "preferred_username") this.setState({ username: element.Value });
                if (element.Name == "phone_number") this.setState({ phone_number: element.Value.substring(2) });
                if (element.Name == "address") this.setState({ street: element.Value });
                if (element.Name == "custom:city") this.setState({ city: element.Value });
                if (element.Name == "custom:state") this.setState({ state: element.Value });
                if (element.Name == "custom:zipcode") this.setState({ zip: element.Value });
                if (element.Name == "custom:avatar_url") this.setState({ imagePreviewUrl: element.Value });
            });
        }


    }
    componentDidUpdate() {
        this.props.initialize({
            username: this.state.username,
            phone_number: this.state.phone_number,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
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
                <FormComp.AvatarPreview src={this.state.imagePreviewUrl ? this.state.imagePreviewUrl : UserImage} />
            </FormComp.InputContainer>
        );
    };

    onUpdateFormSubmit = (formValues) => {
        if (this.state.image == null || !this.state.image) {
            this.props.update(formValues, this.state.imagePreviewUrl, this.props.session?.accessToken?.jwtToken, this.state.email)
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
                        this.props.update(formValues, url, this.props.session?.accessToken?.jwtToken, this.state.email);
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
                        <FormComp.AvatarPreview src={this.state.imagePreviewUrl ? this.state.imagePreviewUrl : UserImage} alt="User Image" />
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
                            format={phoneFormatter}
                            parse={phoneParser}
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

    render() {
        return <ProfileComp.ContentContainer>

            <ProfileComp.ImageContainer>

                <ProfileComp.Image src={this.state.imagePreviewUrl ? this.state.imagePreviewUrl : UserImage} alt="User Image" />

            </ProfileComp.ImageContainer>
            <ProfileComp.UserName>{this.state.username} </ProfileComp.UserName>
            <ProfileComp.InputContainer>
                <ProfileComp.InputGroup>
                    <ProfileComp.Label>Email</ProfileComp.Label>
                    <ProfileComp.Input value={this.state.email} disabled />
                </ProfileComp.InputGroup>
                <ProfileComp.InputGroup>
                    <ProfileComp.Label>Phone Number</ProfileComp.Label>
                    <ProfileComp.Input
                        value={
                            this.state.phone_number ?
                                this.state.phone_number.substring(0, 7).match(/.{1,3}/g).join("-")
                                + this.state.phone_number.substring(7)
                                : this.state.phone_number}
                        disabled />
                </ProfileComp.InputGroup>


                <ProfileComp.InputGroup >
                    <ProfileComp.Label>Address</ProfileComp.Label>
                    <ProfileComp.Input type="address" value={this.state.street} name="street" id="street" data-test="sign-in-city-input" disabled />
                </ProfileComp.InputGroup>

                <ProfileComp.InputGroup>
                    <ProfileComp.Label></ProfileComp.Label>
                    <ProfileComp.Input type="city" width="150px" value={this.state.city} name="city" id="city" data-test="sign-in-city-input" disabled />
                    <ProfileComp.Input type="state" width="70px" value={this.state.state} name="state" id="state" data-test="sign-in-state-input" disabled />
                    <ProfileComp.Input type="zip" width="100px" value={this.state.zip} name="zip" id="zip" data-test="sign-in-state-input" disabled />
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