import React, { useEffect } from "react";
import { ProfileCardComp } from "../../styledComponents/export";
import { get_fav_by_user } from "../../actions";
import { connect } from "react-redux";
// import IMAGE from "../../resources/1.jpg";
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
        {/* <InvitComp.StarterContainer>
                <InvitComp.Starter>
                    <InvitComp.RouteLink to={`${ROUTES.USER}/123456789`}>
                        <InvitComp.Avatar src={AVATAR} />
                        <InvitComp.UserInfor>
                            <InvitComp.Username>
                                IsMondayTMR
                            </InvitComp.Username>
                            <InvitComp.UserId>
                                ID:123456789
                            </InvitComp.UserId>
                        </InvitComp.UserInfor>
                    </InvitComp.RouteLink>
                </InvitComp.Starter> */}
        const cards = props?.favList?.item?.map((item, index) => {
            return <ProfileCardComp.Card key={index}>
                <ProfileCardComp.StarterContainer>
                    <ProfileCardComp.Starter>
                        <ProfileCardComp.RouteLink to={`${ROUTES.USER}/${item.sub}`}>
                            <ProfileCardComp.UserInfor>
                                <ProfileCardComp.Username>
                                    {item.username}
                                </ProfileCardComp.Username>
                                <ProfileCardComp.UserId>
                                    Id: {item.sub}
                                </ProfileCardComp.UserId>
                            </ProfileCardComp.UserInfor>
                        </ProfileCardComp.RouteLink>
                    </ProfileCardComp.Starter>
                    <ProfileCardComp.ButtonContainer>
                        <ProfileCardComp.Button onClick={() => deleteLike(item.id)}>remove</ProfileCardComp.Button>

                    </ProfileCardComp.ButtonContainer>
                </ProfileCardComp.StarterContainer>
                <ProfileCardComp.DetailContainer>
                    <ProfileCardComp.ItemContainer>
                        <ProfileCardComp.RouteLink to={`${ROUTES.SEARCH}/item_detail/item/${item.sub}/${item.id}`}>
                            <ProfileCardComp.Image src={`${item.media_urls[0]}`} />
                        </ProfileCardComp.RouteLink>
                        <ProfileCardComp.ItemInfor>
                            <ProfileCardComp.ItemTitle>
                                {item.title}
                            </ProfileCardComp.ItemTitle>
                            <ProfileCardComp.ItemDesc>
                                {item.description}
                            </ProfileCardComp.ItemDesc>
                        </ProfileCardComp.ItemInfor>
                    </ProfileCardComp.ItemContainer>

                </ProfileCardComp.DetailContainer>



            </ProfileCardComp.Card >;
        });
        return cards;
    };
    return <ProfileCardComp>
        Favorite
        <ProfileCardComp.Container>
            {renderCard()}
        </ProfileCardComp.Container>

    </ProfileCardComp>;


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