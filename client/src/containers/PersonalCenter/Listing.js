import React from "react";
import { ProfileComp, ResultContentComp } from "../../styledComponents/export";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import data from "../../const/cardData";
import { postNewItem, getListing } from "../../actions";
import { Loading } from "../../styledComponents/export";
import Loader from "../../resources/loader.gif";
import PostForm from "../../components/PersonalCenter/PostForm";
import UpdatePost from "../../components/PersonalCenter/UpdatePost";

class Listing extends React.Component {
    state = { postHide: true, updatePostHide: true, username: "", email: "", sub: "", images: [], imagePreviewUrls: [], category: data[0].title, subcategory: data[0].subtitle, currentItem: {} };

    componentDidMount() {
        this.setState({ subcategory: data[0].subtitle });
        if (this.props?.user != null) {

            this.props?.user?.forEach(element => {
                if (element.Name == "preferred_username") this.setState({ username: element.Value });
                if (element.Name == "email") this.setState({ email: element.Value });
                if (element.Name == "sub") this.setState({ sub: element.Value });
            });
        }

        this.props.initialize({
            category: data[0].title,
            subcategory: data[0].subtitle[0],
        });
    }

    componentDidUpdate(prevProp, prevState) {
        if (this.state.sub !== prevState.sub) {
            this.props.getListing(this.state.sub);
        }
    }
    openPostForm = () => {
        this.setState({ postHide: false });
    };

    closePostForm = () => {
        this.setState({ postHide: true });
    };

    openUpdateForm = (item) => {
        this.setState({ currentItem: item });
        this.setState({ updatePostHide: false });
    };

    closeUpdateForm = () => {
        this.setState({ updatePostHide: true });
    };

    renderData = () => {
        if (this.props?.list?.length === 0) {
            return this.props?.success === null ? <Loading src={Loader} /> : <ResultContentComp.NoResultText>Opps! Seems like no items were found</ResultContentComp.NoResultText>;
        }
        return this.props?.list.map(object => {
            return (
                <ResultContentComp.ListCard key={object.id}>
                    <ResultContentComp.Link to={""}>
                        <ResultContentComp.Img src={object.media_urls[0]} alt="test" />
                        <ResultContentComp.InforContainer>
                            <ResultContentComp.Title>{object.title}</ResultContentComp.Title>
                            <ResultContentComp.Description>{object.description}</ResultContentComp.Description>
                            <ResultContentComp.Donate hide={object.donate ? "block" : "none"}>Donate</ResultContentComp.Donate>
                        </ResultContentComp.InforContainer>
                    </ResultContentComp.Link>
                    <ResultContentComp.ButtonContainer>
                        <ResultContentComp.Button>Delete</ResultContentComp.Button>
                        <ResultContentComp.Button
                            onClick={() => { this.openUpdateForm(object); }}>Update</ResultContentComp.Button>
                    </ResultContentComp.ButtonContainer>
                </ResultContentComp.ListCard>);
        });

    };
    render() {
        return <ProfileComp.ContentContainer>
            <ProfileComp.NewList onClick={this.openPostForm}>
                New Item
            </ProfileComp.NewList>
            <PostForm
                hide={this.state.postHide}
                close={this.closePostForm}
                username={this.state.username}
                email={this.state.email}
                sub={this.state.sub} />

            {this.renderData()}
            <UpdatePost
                hide={this.state.updatePostHide}
                close={this.closeUpdateForm}
                username={this.state.username}
                email={this.state.email}
                item={this.state.currentItem}
                sub={this.state.sub} />
        </ProfileComp.ContentContainer>;
    }

}
Listing.propTypes = {
    user: PropTypes.array,
    list: PropTypes.array,
    handleSubmit: PropTypes.func,
    change: PropTypes.func,
    initialize: PropTypes.func,
    postNewItem: PropTypes.func,
    getListing: PropTypes.func,
    success: PropTypes.bool
};

const formWrapper = reduxForm({
    form: "Post",
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
})(Listing);

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        list: state.listing.item,
        success: state.listing.success,
    };
};



export default connect(mapStateToProps, { postNewItem, getListing })(formWrapper);