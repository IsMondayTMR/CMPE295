import React, { useEffect } from "react";
import { ProfileComp, ProfileCardComp } from "../../styledComponents/export";
import { get_fav_by_user } from "../../actions";
import { connect } from "react-redux";
import IMAGE from "../../resources/1.jpg";
import PropTypes from "prop-types";
import axios from "axios";
import { FAV } from "../../const/apis";
import * as ROUTES from "../../router/routes";
const Favorite = (props) => {

    useEffect(() => {
        props.get_fav_by_user(props?.user?.user?.sub);
    }, []);

    const deleteLike = (post_id) => {
        axios.delete(`${FAV}?user_id=${props?.user?.user?.sub}&post_id=${post_id}`)
            .then(() => {
                props.get_fav_by_user(props?.user?.user?.sub);
            });
    };

    const renderCard = () => {
        if (props?.favList?.success == false || props?.favList?.item?.length == 0) {
            return <>
            </>;
        }

        const cards = props?.favList?.item?.map((item, index) => {
            return <ProfileCardComp.ListCard key={index}>
                <ProfileCardComp.Link to={`${ROUTES.SEARCH}/item_detail/item/${props?.user?.user?.sub}/${item.id}`}>
                    <ProfileCardComp.Img src={item?.media_urls == null ? IMAGE : item?.media_urls[0]} />
                    <ProfileCardComp.InforContainer>
                        <ProfileCardComp.Title>{item?.title}</ProfileCardComp.Title>
                        <ProfileCardComp.Description>{item?.description}</ProfileCardComp.Description>
                        <ProfileCardComp.Donate >{item?.donate}</ProfileCardComp.Donate>
                    </ProfileCardComp.InforContainer>
                </ProfileCardComp.Link>
                <ProfileCardComp.ButtonContainer>
                    <ProfileCardComp.Button onClick={() => deleteLike(item.id)}>remove</ProfileCardComp.Button>
                </ProfileCardComp.ButtonContainer>
            </ProfileCardComp.ListCard >;
        });
        return cards;
    };
    return <ProfileComp.ContentContainer>
        Favorite
        {renderCard()}
    </ProfileComp.ContentContainer>;
};

Favorite.propTypes = {
    user: PropTypes.object.isRequired,
    favList: PropTypes.object.isRequired,
    get_fav_by_user: PropTypes.func.isRequired
};
const mapStateToProp = (state) => {
    return {
        favList: state.favList,
        user: state.user,
    };
};
export default connect(mapStateToProp, { get_fav_by_user })(Favorite);