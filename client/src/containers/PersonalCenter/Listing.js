import React from "react";
import { ProfileComp, ProfileCardComp } from "../../styledComponents/export";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import data from "../../const/cardData";
import { postNewItem, getListing } from "../../actions";
import { Loading } from "../../styledComponents/export";
import Loader from "../../resources/loader.gif";
import PostForm from "../../components/PersonalCenter/PostForm";
import UpdatePost from "../../components/PersonalCenter/UpdatePost";
import * as ROUTES from "../../router/routes";

class Listing extends React.Component {
    state = { postHide: true, updatePostHide: true, username: "", email: "", sub: "", images: [], imagePreviewUrls: [], category: data[0].title, subcategory: data[0].subtitle, currentItem: {} };

    componentDidMount() {
        this.setState({ subcategory: data[0].subtitle });
        if (this.props?.user != null) {

            this.setState({ username: this.props?.user.preferred_username });
            this.setState({ email: this.props?.user.email });
            this.setState({ sub: this.props?.user.sub });
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
            return this.props?.success === null ? <Loading src={Loader} /> : <ProfileCardComp.NoResultText>Opps! Seems like no items were found</ProfileCardComp.NoResultText>;
        }
        return this.props?.list.map(object => {
            return (
                <ProfileCardComp.ListCard key={object.id}>
                    <ProfileCardComp.Link to={`${ROUTES.PROFILE}/item/${object.id}`}>
                        <ProfileCardComp.Img src={object.media_urls[0]} alt="test" />
                        <ProfileCardComp.InforContainer>
                            <ProfileCardComp.Title>{object.title}</ProfileCardComp.Title>
                            <ProfileCardComp.Description>{object.description}</ProfileCardComp.Description>
                            <ProfileCardComp.Donate hide={object.donate ? "block" : "none"}>Donate</ProfileCardComp.Donate>
                        </ProfileCardComp.InforContainer>
                    </ProfileCardComp.Link>
                    <ProfileCardComp.ButtonContainer>
                        <ProfileCardComp.Button>Delete</ProfileCardComp.Button>
                        <ProfileCardComp.Button
                            onClick={() => { this.openUpdateForm(object); }}>Update</ProfileCardComp.Button>
                    </ProfileCardComp.ButtonContainer>
                </ProfileCardComp.ListCard >);
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
    user: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    postNewItem: PropTypes.func.isRequired,
    getListing: PropTypes.func.isRequired,
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