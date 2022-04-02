import React from "react";
import { FormComp, ListingComp } from "../../styledComponents/export";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import data from "../../const/cardData";
import { uploadImageAsPromise, getAllImageUrl } from "../../utils/imageUploader";
import { updateItem } from "../../actions";

class UpdatePost extends React.Component {
    state = { images: [], checked: false, prevImagesUrls: [], imagePreviewUrls: [], defaultSubcategory: null, category: null, subcategory: null };

    componentDidMount() {

    }

    componentDidUpdate(prevProps) {

        if (prevProps.hide !== this.props.hide) {
            this.setState({ images: [], checked: false, prevImagesUrls: [], imagePreviewUrls: [], defaultSubcategory: null, category: null, subcategory: null });
            this.props.initialize({
                title: this.props?.item.title,
                description: this.props?.item.description,
                color: this.props?.item.color,
                brand: this.props?.item.brand,
                donate: this.props?.item.donate,
                material: this.props?.item.material,
            });
            this.setState({ checked: this.props?.item?.donate ? this.props?.item?.donate : false, prevImagesUrls: this.props?.item?.media_urls, category: "", defaultSubcategory: this.props?.item.subcategory });
            const temp = data.filter((object) => {
                return object.title === this.props?.item.category;
            });
            const tempCategory = this.props?.item == null ? "" : this.props?.item.category;
            this.setState({ category: tempCategory });

            if (temp != null && temp != undefined) {
                this.setState({ subcategory: temp[0]?.subtitle });
            }

            this.props.change("category", tempCategory);
            this.props.change("subcategory", this.props?.item.subcategory);
            this.props.change("worncondition", this.props?.item.worncondition);
        }
    }
    componentWillUnmount() {
    }
    onUpdateFormSubmit = async (formValues) => {
        console.log(formValues);
        if (this.state.images.length == 0) {

            return;
        }
        this.getAllImageUrl(formValues).then((urls) => {
            let allUrls = urls + this.state.prevImagesUrls;
            console.log(allUrls);
            // this.props.updateItem(allUrls, formValues,
            //     {
            //         username: this.props.username,
            //         email: this.props.email,
            //         sub: this.props.sub,
            //     })
            //     .then(() => {
            //         this.props.close();
            //     });
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
    renderRadioSelector = ({ name, text, type, checked, input }) => {
        input.checked = checked;
        input.onClick = () => {
            if (input.value == "Yes") this.setState({ checked: true });
            if (input.value == "No") this.setState({ checked: false });
        };
        return (
            <FormComp.RadioLabel>
                <FormComp.RadioInput
                    type={type}
                    placeholder={text}
                    name={name}
                    id={name}
                    {...input} />
                {input.value}
            </FormComp.RadioLabel>
        );
    };
    renderPostSelectField = ({ input, name, label, data }) => {
        if (!data) {
            return null;
        }
        const options = data ? data.map((object) => {
            return <FormComp.Option key={object.key} value={object.title}> {object.title}</FormComp.Option >;
        }) : null;
        return (
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.Select
                    value={this.state.category == null ? "" : this.state.category}
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
        if (data == null || data == undefined || data.length == 0) {
            return null;
        }
        const options = data ? data?.map((object, index) => {
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

    renderWornConditionField = ({ input, name, label, data }) => {
        const options = data ? data.map((index) => {
            return <FormComp.Option key={index} value={index}> {index}</FormComp.Option >;
        }) : null;

        return (
            <FormComp.InputContainer >
                <FormComp.Label >{label}</FormComp.Label>
                <FormComp.Select
                    name={name} id={name}
                    {...input}
                >
                    {options}
                </FormComp.Select>
            </FormComp.InputContainer >
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

        var newPreImages = this.state.prevImagesUrls.filter((image) => {
            return image != deleteKey;
        });
        this.setState({ images: newImages, prevImagesUrls: newPreImages, imagePreviewUrls: newUrls });
    };

    renderPreviewImages = () => {
        if (!this.state.prevImagesUrls && !this.state.prevImagesUrls) {
            return;
        }
        var previwes = this.state?.imagePreviewUrls.map((image, index) => {
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

        var prevImagesPreview = this.state?.prevImagesUrls.map((image, index) => {
            if (image == null || image == undefined) {
                return;
            }

            return <ListingComp.ImageBox key={index}>

                <ListingComp.Image src={`${image}`} alt={`${image}`} key={index} />
                <ListingComp.DeleteContainer onClick={() => {
                    this.deleteImage(image);
                }}>
                    <i className="fas fa-times"></i>
                </ListingComp.DeleteContainer>
            </ListingComp.ImageBox>;
        });
        // console.log(prevImagesPreview);
        // console.log(previwes);
        return <ListingComp.ImagesContainer>
            {prevImagesPreview}
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
                    onSubmit={this.props.handleSubmit(this.onUpdateFormSubmit)}>
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
                                    checked={this.state.checked}
                                    data-test="sign-in-gender-input" />
                                <Field
                                    component={this.renderRadioSelector}
                                    type="radio"
                                    name="donate"
                                    value="No"
                                    checked={!this.state.checked}
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
                            component={this.renderWornConditionField}
                            label="Worncondition"
                            type="number"
                            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            name="worncondition" />

                    </FormComp.FormContainer>
                    <FormComp.SubmitButton >
                        Submit
                    </FormComp.SubmitButton>
                </FormComp.Form>

            </FormComp>
            <FormComp.Modal hide={this.props.hide ? "none" : "block"} />
        </React.Fragment>;
    }
    render() {

        return this.renderForm();
    }

}

UpdatePost.propTypes = {
    item: PropTypes.object.isRequired,
    hide: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired,
    uploadImageAsPromise: PropTypes.func.isRequired,
    getAllImageUrl: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
};
const formWrapper = reduxForm({
    form: "UpdatePostForm",
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
})(UpdatePost);

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

export default connect(mapStateToProps, { updateItem, uploadImageAsPromise, getAllImageUrl })(formWrapper);