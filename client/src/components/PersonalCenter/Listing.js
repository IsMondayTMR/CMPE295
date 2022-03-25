import React from "react";
import { ProfileComp, FormComp, ListingComp } from "../../styledComponents/export";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import defaultPlaceholder from "../../resources/defaultPlaceholder.png";
class Listing extends React.Component {
    state = { hide: true, mainImage: null, mainImageUrl: null, images: [], imagePreviewUrls: [] };

    openNewForm = () => {
        this.setState({ hide: false });
    };

    closeNewForm = () => {
        this.setState({ hide: true });
    };

    renderPostField = ({ input, name, label, text, type }) => {
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
            </FormComp.InputContainer>
        );
    };
    onPostFormSubmit = (formValues) => {
        console.log(formValues);
    };

    readFile = (key, file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            var newImage = { [file.name]: file };
            var newUrl = { [file.name]: URL.createObjectURL(file) };
            this.setState(prevState => ({
                images: [...prevState.images, newImage],
                imagePreviewUrls: [...prevState.imagePreviewUrls, newUrl]
            }));
        };

    };
    handleMainImagesChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.setState({
                mainImage: event.target.files[0],
                mainImageUrl: URL.createObjectURL(file)
            });
        };


    };

    handleImagesChange = (event) => {
        event.preventDefault();
        let files = event.target.files;

        for (const [key, value] of Object.entries(files)) {
            if (value && value.type.match("image.*")) {
                this.readFile(key, value);
            } else {
                console.log("invalue input tyep");
            }

        }
    };
    deleteImage = (deleteKey) => {
        var newImages = this.state.images.filter((image) => {
            for (const [key, value] of Object.entries(image)) {
                return deleteKey != key && value == value;
            }
        });

        var newUrls = this.state.imagePreviewUrls.filter((url) => {
            for (const [key, value] of Object.entries(url)) {
                return deleteKey != key && value == value;
            }
        });

        this.setState({ images: newImages, imagePreviewUrls: newUrls });
    };
    renderPreviewImages = () => {
        var previwes = this.state.imagePreviewUrls.map((image, index) => {
            if (image == null || image == undefined) {
                return;
            }
            for (const [key, value] of Object.entries(image)) {
                return <ListingComp.ImageBox key={index}>

                    <ListingComp.Image src={`${value}`} alt={`${key}`} key={index} />
                    <ListingComp.DeleteContainer onClick={() => {
                        this.deleteImage(key);
                    }}>
                        <i className="fas fa-times"></i>
                    </ListingComp.DeleteContainer>
                </ListingComp.ImageBox>;
            }
        });
        return <ListingComp.ImagesContainer>
            {previwes}
        </ListingComp.ImagesContainer>;

    };

    renderForm() {
        return <React.Fragment>
            <FormComp hide={this.state.hide ? "none" : "block"}>
                <FormComp.CloseButton
                    onClick={() => this.setState({ hide: true })}
                    data-test="close-btn" />
                <FormComp.Form
                    onSubmit={this.props.handleSubmit(this.onPostFormSubmit)}>
                    <FormComp.FormContainer maxHeight="700px">
                        <FormComp.ImageGroup>
                            <FormComp.MainImagePreview src={this.state.mainImageUrl == null ? defaultPlaceholder : this.state.mainImageUrl} alt="User Image" />
                            <FormComp.FileInputLabel htmlFor="upload">
                                <i className="fa-solid fa-camera"></i>
                                <FormComp.FileInput
                                    id="upload"
                                    type="file"
                                    accept="image/x-png,image/gif,image/jpeg"
                                    onChange={this.handleMainImagesChange} />
                            </FormComp.FileInputLabel>
                        </FormComp.ImageGroup>

                        <FormComp.InputContainer >
                            <FormComp.FileInput
                                id="upload"
                                type="file"
                                accept="image/x-png,image/gif,image/jpeg"
                                display="block"
                                multiple
                                onChange={this.handleImagesChange} />
                        </FormComp.InputContainer>

                        <FormComp.PostImageGroup>

                            {this.renderPreviewImages()}
                        </FormComp.PostImageGroup>
                        <Field
                            component={this.renderPostField}
                            label="Title"
                            text="Title"
                            type="text"
                            name="Title" />
                        <Field
                            component={this.renderPostField}
                            label="Description"
                            text="Description"
                            type="text"
                            name="Description" />
                        <Field
                            component={this.renderPostField}
                            label="Type"
                            text="Type"
                            type="Type"
                            name="Type" />
                        <FormComp.SubmitButton >
                            Submit
                        </FormComp.SubmitButton>
                    </FormComp.FormContainer>
                </FormComp.Form>

            </FormComp>
            <FormComp.Modal hide={this.state.hide ? "none" : "block"} />
        </React.Fragment>;

    }
    render() {
        return <ProfileComp.ContentContainer>
            <ProfileComp.NewList onClick={this.openNewForm}>
                New Item
            </ProfileComp.NewList>
            {this.renderForm()}
        </ProfileComp.ContentContainer>;
    }

}
Listing.propTypes = {
    user: PropTypes.object,
    handleSubmit: PropTypes.func,
};
const formWrapper = reduxForm({
    form: "Post",
})(Listing);

const mapStateToProps = () => {
    return {

    };
};



export default connect(mapStateToProps, {})(formWrapper);