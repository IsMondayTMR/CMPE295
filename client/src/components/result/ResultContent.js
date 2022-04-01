import React from "react";
import { ResultContentComp, Loading } from "../../styledComponents/export";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { search } from "../../actions";
import { FAV } from "../../const/apis";
import PropTypes from "prop-types";
import defaultImage from "../../resources/defaultPlaceholder.png";
import Loader from "../../resources/loader.gif";
import *as ROUTES from "../../router/routes";
import axios from "axios";
class ResultContent extends React.Component {
    state = { key: this.props.match.params.key, category: this.props.match.params.category, user_id: this.props.match.params.user_id };
    componentDidMount() {

        this.props.search(this.state.category, this.state.user_id, this.state.key);
    }

    addLike = (post_id) => {
        axios.post(`${FAV}?user_id=${this.props?.user?.user?.sub}&post_id=${post_id}`)
            .then(() => {
                this.props.search(this.state.category, this.state.user_id, this.state.key);
            });
    };

    deleteLike = (post_id) => {
        axios.delete(`${FAV}?user_id=${this.props?.user?.user?.sub}&post_id=${post_id}`)
            .then(() => {
                this.props.search(this.state.category, this.state.user_id, this.state.key);
            });
    };

    renderData = () => {
        console.log(this.props?.data);
        if (this.props?.success === null || this.props?.data === null || this.props?.data === undefined || this.props?.data?.length === 0) {
            return this.props?.success === null ? <Loading src={Loader} /> : <ResultContentComp.NoResultText>Opps! Seems like no items were found</ResultContentComp.NoResultText>;
        }

        const data = this.props?.data?.map(object => {
            const favorite_icons = this.props?.user?.user == null || this.props?.user?.status == false ? null : <>
                <ResultContentComp.Fav
                    hide={object?.liked == undefined ? false : !object?.liked}
                    onClick={() => this.addLike(object.id)}>
                    <i className="far fa-heart"></i>

                </ResultContentComp.Fav>
                <ResultContentComp.FavFill
                    hide={object?.liked == undefined ? false : object?.liked}
                    onClick={() => this.deleteLike(object.id)}>
                    <i className="fas fa-heart"></i>
                </ResultContentComp.FavFill>
            </>;
            return (
                <ResultContentComp.Card key={object.id}>
                    {favorite_icons}
                    <ResultContentComp.Link to={`${ROUTES.SEARCH}/item_detail/${this.state.category}/${this.state.user_id}/${object.id}`}>
                        <ResultContentComp.Img src={object.media_urls == null ? defaultImage : object.media_urls[0]} alt="test" />
                    </ResultContentComp.Link>
                    <ResultContentComp.Title>{object.title}</ResultContentComp.Title>
                    <ResultContentComp.InforContainer>
                        <ResultContentComp.Username to="">{object.name}</ResultContentComp.Username>
                        <ResultContentComp.Donate hide={object.donate ? "block" : "none"}>Donate</ResultContentComp.Donate>
                    </ResultContentComp.InforContainer>
                </ResultContentComp.Card>);
        });
        return (
            <ResultContentComp.Container>
                {data}
            </ResultContentComp.Container>
        );

    };

    render() {
        return <ResultContentComp>
            {this.renderData()}
        </ResultContentComp>;
    }

}

ResultContent.propTypes = {
    search: PropTypes.func.isRequired,
    data: PropTypes.any.isRequired,
    success: PropTypes.bool,
    match: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        success: state.search.success,
        term: state.search.searchTerm,
        data: state.search.data,
        user: state.user
    };
};

export default connect(mapStateToProps, { search })(withRouter(ResultContent));