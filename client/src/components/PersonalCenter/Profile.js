import React from "react";
import { ProfileComp, FormComp } from "../../styledComponents/export";
import UserImage from "../../resources/userImage.png";
// import { fb } from "../../service";
import axios from "axios";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import Dropzone from "./Dropzone";
import PropTypes from "prop-types";
class Profile extends React.Component {

    state = { image: null, imagePreviewUrl: null, progress: 0, imageUrl: null, hide: true };

    onImageSubmit = async (event) => {
        event.preventDefault();
        console.log("here");


        const { data } = await axios.put("https://api.chatengine.io/users/", {
            "username": "test1@gmail.com",
            "first_name": "Adam",
            "last_name": "La Morre",
            "secret": "test1@gmail.com",
        }, {
            headers: { "PRIVATE-KEY": "b4d41842-0e56-4df5-9bec-5ebab5b3438d" }
        });


        // const uploadTask = fb.storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        // uploadTask.on(
        //     "state_changed",
        //     snapshot => {
        //         const progress = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );

        //         this.setState({ progres: progress });
        //     },
        //     error => {
        //         console.log(error);
        //     },
        //     () => {
        //         fb.storage
        //             .ref("images")
        //             .child(this.state.image.name)
        //             .getDownloadURL()
        //             .then(url => {
        //                 this.setState({ imageUrl: url });


        //             });
        //     }
        // );

        const formData = new FormData;
        formData.append("avatar", 0);
        formData.append("first_name", "Bo");
        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("secret", data.secret);

        const json = JSON.stringify({

            "avatar": "https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png",

        });
        const res = await axios.patch("https://api.chatengine.io/users/166257", {


            "username": "test1@gmail.com",
            "first_name": "2222",
            "last_name": "2222",
            "custom_json": json,
        }, {
            headers: { "PRIVATE-KEY": "b4d41842-0e56-4df5-9bec-5ebab5b3438d" }
        });
        console.log(JSON.parse(res.data.custom_json));
    };

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

    onFormSubmid(formValue) {
        console.log(formValue);
    }
    renderForm() {
        return <React.Fragment>
            <FormComp>
                <FormComp.Form
                    onSubmit={this.props.handleSubmit(this.onFormSubmid)}>
                    <FormComp.InputContainer>
                        <Field
                            component={this.renderEditField}
                            label="username"
                            text='Enter username'
                            type="text"
                            name="username" />
                        <Field
                            component={this.renderEditField}
                            label="Email"
                            text="Enter Email"
                            type="Email"
                            name="Email" />

                        <Dropzone />

                        <FormComp.SubmitButton>
                            Submit
                        </FormComp.SubmitButton>
                    </FormComp.InputContainer>
                </FormComp.Form>
            </FormComp>
            <FormComp.Modal />
        </React.Fragment>;

    }
    render() {


        return <ProfileComp.ContentContainer>

            <ProfileComp.ImageContainer>
                <form onSubmit={this.onImageSubmit}>
                    <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleChange} />
                    <button type="submit">submit</button>
                </form>

                <ProfileComp.Image src={this.state.imagePreviewUrl ? this.state.imagePreviewUrl[0] : UserImage} alt="User Image" />
            </ProfileComp.ImageContainer>
            <ProfileComp.UserName>IsMondayTMR</ProfileComp.UserName>
            <ProfileComp.InputContainer>
                <ProfileComp.InputGroup>
                    <ProfileComp.Label>Email</ProfileComp.Label>
                    <ProfileComp.Input value="Test1@gmail.com" disabled />
                </ProfileComp.InputGroup>
                <ProfileComp.InputGroup>
                    <ProfileComp.Label>Phone Number</ProfileComp.Label>
                    <ProfileComp.Input value="1313412412" disabled />
                </ProfileComp.InputGroup>
                <ProfileComp.InputGroup>
                    <ProfileComp.Label>Description</ProfileComp.Label>
                    <ProfileComp.TextArea maxLength="50" value="description" disabled />
                </ProfileComp.InputGroup>
            </ProfileComp.InputContainer>
            <ProfileComp.EditButton>Edit</ProfileComp.EditButton>

            {this.renderForm()}
        </ProfileComp.ContentContainer>;
    }

}

const formWrapped = reduxForm({ form: "Profile" })(Profile);
const selector = formValueSelector("Authorization");
const mapStateToProps = (state) => {
    return {
        signInEmail: selector(state, "signInEmail") === undefined ? "" : selector(state, "signInEmail"),
        signInPassword: selector(state, "signInPassword") === undefined ? "" : selector(state, "signInEmail"),
        registerEmail: selector(state, "registerEmail") === undefined ? "" : selector(state, "registerEmail"),
        registerPassword: selector(state, "registerPassword") === undefined ? "" : selector(state, "registerPassword")
    };
};

Profile.propTypes = {
    handleSubmit: PropTypes.func,
};
export default connect(mapStateToProps)(formWrapped);