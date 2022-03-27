import React from "react";
import { FormComp, ListingComp } from "../../styledComponents/export";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import data from "../../const/cardData";
import { fb } from "../../service";
import { postNewItem } from "../../actions";

class PostForm extends React.Component {
    state = { images: [], imagePreviewUrls: [], category: data[0].title, subcategory: data[0].subtitle };

    componentDidMount() {
        this.props.initialize({
            category: data[0].title,
            subcategory: data[0].subtitle[0],
        });
    }

    uploadImageAsPromise = (image, title, username) => {

        return new Promise(function (resolve, reject) {
            const subFolder = title.replace(/\s/g, "");
            const uploadTask = fb.storage.ref(`${username}/${subFolder}/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                },
                error => {
                    reject(error);
                },
                () => {
                    fb.storage
                        .ref(`${username}/${subFolder}`)
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            resolve(url);
                        });
                });
        });

    };

    getAllImageUrl = (formValues) => {
        return new Promise((resolve, reject) => {
            var urls = [];
            this.state.images.forEach((image) => {
                const files = Object.values(image);
                urls.push(this.uploadImageAsPromise(files[0], formValues.title, this.state.username));
            });
            Promise.all(urls).then((urls) => {
                resolve(urls);
            }).catch(err => {
                reject(err);
            });
        });

    };
    onPostFormSubmit = async (formValues) => {
        console.log(this.props);
        if (this.state.images.length == 0) {
            return;
        }
        this.getAllImageUrl(formValues).then((urls) => {
            this.props.postNewItem(urls, formValues,
                {
                    username: this.props.username,
                    email: this.props.email,
                    sub: this.props.sub,
                })
                .then(() => {
                    this.props.close();
                });
        }).catch(err => {
            alert(err);
        });
    };
    renderPostField = ({ input, name, label, text, type }) => {
        return (
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.Input type={type} placeholder={text} name={name} id={name} {...input} />
            </FormComp.InputContainer>
        );
    };
    renderRadioSelector = ({ input, name, text, type, select, onClick }) => {
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
    renderPostSelectField = ({ input, name, label, data }) => {
        const options = data ? data.map((object) => {
            return <FormComp.Option key={object.key} value={object.title}> {object.title}</FormComp.Option >;
        }) : null;
        return (
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.Select
                    onChange={(e) => {
                        const temp = data.filter((object) => {
                            return object.title === e.target.value;
                        });
                        this.setState({ category: e.target.value });
                        this.setState({ subcategory: temp[0].subtitle });
                        this.props.change("category", e.target.value);
                        this.props.change("subcategory", temp[0].subtitle[0]);
                    }}
                    name={name}
                    id={name}
                    onBlur={() => input.onBlur}
                    onDragStart={() => input.onDragStart}
                    onDrop={() => input.onDrop}
                    onFocus={() => input.onFocus}>
                    {options}
                </FormComp.Select>
            </FormComp.InputContainer >
        );
    };
    renderPostSubSelectField = ({ input, name, label, data }) => {
        const options = data ? data.map((object, index) => {
            return <FormComp.Option key={index} value={object}> {object}</FormComp.Option >;
        }) : null;

        return (
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.Select name={name} id={name} {...input}>
                    {options}
                </FormComp.Select>
            </FormComp.InputContainer >
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
            <FormComp hide={this.props.hide ? "none" : "block"}>
                <FormComp.CloseButton
                    onClick={() => this.props.close()}
                    data-test="close-btn" />
                <FormComp.Form
                    onSubmit={this.props.handleSubmit(this.onPostFormSubmit)}>
                    <FormComp.FormContainer maxHeight="700px">
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
                            name="title" />
                        <Field
                            component={this.renderPostField}
                            label="Description"
                            text="Description"
                            type="text"
                            name="description" />
                        <FormComp.InputContainer>
                            <FormComp.Label >Donate</FormComp.Label>
                            <FormComp.RadioGroup>
                                <Field
                                    component={this.renderRadioSelector}
                                    type="radio"
                                    name="donate"
                                    value="Yes"
                                    data-test="sign-in-gender-input" />
                                <Field
                                    component={this.renderRadioSelector}
                                    type="radio"
                                    name="donate"
                                    value="No"
                                    data-test="sign-in-gender-input" />
                            </FormComp.RadioGroup>
                        </FormComp.InputContainer>
                        <Field
                            component={this.renderPostSelectField}
                            label="Category"
                            text="category"
                            type="category"
                            name="category"
                            data={data} />
                        <Field
                            component={this.renderPostSubSelectField}
                            label="Subcategory"
                            text="subcategory"
                            type="subcategory"
                            name="subcategory"
                            data={this.state.subcategory} />
                        <Field
                            component={this.renderPostField}
                            label="Color"
                            text="color"
                            type="text"
                            name="color" />
                        <Field
                            component={this.renderPostField}
                            label="Brand"
                            text="brand"
                            type="brand"
                            name="brand" />
                        <Field
                            component={this.renderPostField}
                            label="Material"
                            text="material"
                            type="material"
                            name="material" />

                        <Field
                            component={this.renderPostField}
                            label="Worncondition"
                            text="worncondition"
                            type="text"
                            name="worncondition" />
                        <FormComp.SubmitButton >
                            Submit
                        </FormComp.SubmitButton>
                    </FormComp.FormContainer>
                </FormComp.Form>

            </FormComp>
            <FormComp.Modal hide={this.props.hide ? "none" : "block"} />
        </React.Fragment>;
    }
    render() {

        return this.renderForm();
    }

}

PostForm.propTypes = {
    hide: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    user: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    postNewItem: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
    success: PropTypes.bool,

};
const formWrapper = reduxForm({
    form: "PostForm",
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
})(PostForm);

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};


export default connect(mapStateToProps, { postNewItem })(formWrapper);