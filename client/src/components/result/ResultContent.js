import React from "react";
import { ResultContentComp, Loading } from "../../styledComponents/export";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { search, filter_data } from "../../actions";
import { FAV } from "../../const/apis";
import PropTypes from "prop-types";
import defaultImage from "../../resources/defaultPlaceholder.png";
import Loader from "../../resources/loader.gif";
import *as ROUTES from "../../router/routes";
import axios from "axios";
class ResultContent extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            key: this.props.match.params.key,
            category: this.props.match.params.category,
            user_id: this.props.match.params.user_id == "null" ? null : this.props.match.params.user_id,
            data: this.props?.data,
        };
        this._isMounted = false;
    }



    componentDidMount() {
        this._isMounted = true;
        this.props.search(this._isMounted, this.state.category, this.state.user_id, this.state.key);
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.data != this.props.data) {

            if (prevState.data != null) {
                var newData = [];
                prevState.data.map((preItem) => {
                    this.props.data.map(item => {
                        // console.log(item);
                        // console.log(preItem);
                        // console.log(item == preItem);
                        if (item.id == preItem.id) {
                            newData.push(item);
                        }
                    });
                });
                this.setState({ data: newData });
            } else {
                this.setState({ data: this.props.data });
            }

        }

        // if (prevState.data != this.state.data) {
        //     const newData = [];

        //     for (var i = 0; i < this.state.data; i++) {
        //         prevState.data.map(item => {
        //             if (item == this.state.data[i]) {
        //                 newData.push(item);
        //             }
        //         });
        //     }
        //     this.setState({ data: newData });
        //     return;
        // }
        if (prevProps.match.params.key != this.props.match.params.key ||
            prevProps.match.params.category != this.props.match.params.category ||
            prevProps.match.params.user_id != this.props.match.params.user_id) {

            this.props.search(this._isMounted, this.props.match.params.category, this.props.match.params.user_id == "null" ? null : this.props.match.params.user_id, this.props.match.params.key)
                .then(() => {
                    this.setState({
                        key: this.props.match.params.key,
                        category: this.props.match.params.category,
                        user_id: this.props.match.params.user_id == "null" ? null : this.props.match.params.user_id,
                        data: this.props.data,
                    });
                });
        }

        if (prevProps?.filter.category != this.props.filter.category ||
            prevProps?.filter.subcategory != this.props.filter.subcategory) {
            var category = this.props?.filter?.category;
            var subcategory = this.props?.filter?.subcategory;
            if (category != null && subcategory != null) {
                const filtered_data = this.state.data.filter((item) => {
                    return item.category == category && item.subcategory == subcategory;
                });
                this.setState({ data: filtered_data });
            }
            if (subcategory == null) {
                const filtered_data = this.state.data.filter((item) => {
                    return item.category == category;
                });
                this.setState({ data: filtered_data });
            }
            if (category == "All" || (category == null && subcategory == null)) {

                const filtered_data = this.props?.data;
                this.setState({ data: filtered_data });
            }
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    addLike = (object) => {
        axios.post(`${FAV}?user_id=${this.props?.user?.user?.sub}&post_id=${object.id}`)
            .then(() => {
                this._isMounted && this.props.search(this._isMounted, this.state.category, this.state.user_id, this.state.key);
            }).catch((err) => {
                alert(err);
            });
    };

    deleteLike = (object) => {
        axios.delete(`${FAV}?user_id=${this.props?.user?.user?.sub}&post_id=${object.id}`)
            .then(() => {
                this._isMounted && this.props.search(this._isMounted, this.state.category, this.state.user_id, this.state.key);
            }).catch((err) => {
                alert(err);
            });
    };

    renderItemsData = () => {
        if (this.state.key == "null" || this.state.key == undefined) {
            return this.props?.success === null ? <Loading src={Loader} /> : <ResultContentComp.NoResultText>Please enter keys for search</ResultContentComp.NoResultText>;
        }
        if (this.props?.success === null ||
            this.props?.success === false ||
            this.state?.data === null ||
            this.state?.data === undefined ||
            this.state?.data?.length === 0) {
            return this.props?.success === null ? <Loading src={Loader} /> : <ResultContentComp.NoResultText>Opps! Seems like no items were found</ResultContentComp.NoResultText>;
        }
        const data = this.state?.data?.map(object => {
            const favorite_icons = this.props?.user?.user == null || this.props?.user?.status == false || this.props?.user?.user?.sub == object?.sub ? null : <>
                <ResultContentComp.Fav
                    hide={object?.liked == undefined ? false : !object?.liked}
                    onClick={() => this.addLike(object)}>
                    <i className="far fa-heart"></i>

                </ResultContentComp.Fav>
                <ResultContentComp.FavFill
                    hide={object?.liked == undefined ? false : object?.liked}
                    onClick={() => this.deleteLike(object)}>
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
    renderUsersData = () => {
        if (this.props?.success === null ||
            this.props?.success === false ||
            this.props?.data === null ||
            this.props?.data === undefined ||
            this.props?.data?.length === 0) {
            return this.props?.success === null ? <Loading src={Loader} /> : <ResultContentComp.NoResultText>Opps! Seems like no Users were found</ResultContentComp.NoResultText>;
        }
        console.log(this.props?.data);
        const users = this.props?.data?.map((user) => {

            return (
                <ResultContentComp.Card key={user.sub}>
                    <ResultContentComp.Link to={`${ROUTES.USER}/${user.id}`}>
                        <ResultContentComp.Img src={user.avatar_url == null ? defaultImage : user.avatar_url} alt="avatar_url" />
                    </ResultContentComp.Link>
                    <ResultContentComp.Username to="">{user.username}</ResultContentComp.Username>
                </ResultContentComp.Card>);
        });
        return (
            <ResultContentComp.Container>
                {users}
            </ResultContentComp.Container>
        );
    };
    render() {
        return <ResultContentComp>
            {this.props.category == "item" ? this.renderItemsData() : this.renderUsersData()}
        </ResultContentComp>;
    }

}

ResultContent.propTypes = {
    search: PropTypes.func.isRequired,
    data: PropTypes.any.isRequired,
    success: PropTypes.bool,
    match: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    filter: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        success: state.search.success,
        key: state.search.key,
        category: state.search.category == null ? "item" : state.search.category,
        data: state.search.data,
        user: state.user,
        filter: state.filter
    };
};

export default connect(mapStateToProps, { search, filter_data })(withRouter(ResultContent));