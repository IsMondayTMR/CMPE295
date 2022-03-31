import React, { useEffect } from "react";
import { UserProfileComp } from "../styledComponents/export";
import AVATAR from "../resources/defaultAvatar.png";
import { getListing, get_non_auth_user_profile } from "../actions";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as ROUTES from "../router/routes";
const UserProfile = (props) => {
    const history = useHistory();
    const { user_id } = useParams();
    useEffect(() => {
        props.get_non_auth_user_profile(user_id);
        props.getListing(user_id);
    }, []);
    const renderItem = () => {
        if (props?.non_auth_user_listing?.item == null || props?.non_auth_user_listing?.item.length == 0) {
            return <>
            </>;
        }
        return props.non_auth_user_listing?.item.map((item) => {
            return <UserProfileComp.ImageLink to={`${ROUTES.SEARCH}/item_detail/${item?.name}/${item?.sub}/${item?.id}`} key={item?.id}>
                <UserProfileComp.ItemImage src={item.media_urls[0] ? item.media_urls[0] : AVATAR} />
            </UserProfileComp.ImageLink>;
        });
    };
    const renderInfor = () => {
        return <UserProfileComp.InforContainer>
            <UserProfileComp.Title>
                {props.non_auth_user?.user?.username}
            </UserProfileComp.Title>

            <UserProfileComp.DetailContainer>
                <UserProfileComp.Text>
                    Rating: {props.non_auth_user?.user?.exchangeRating}
                </UserProfileComp.Text>
            </UserProfileComp.DetailContainer>
            <UserProfileComp.UserInfoContainer>
                <UserProfileComp.IconBox>
                    <UserProfileComp.Icon>
                        <i className="far fa-comment"></i>
                    </UserProfileComp.Icon>
                    message
                </UserProfileComp.IconBox>
                <UserProfileComp.IconBox>
                    <UserProfileComp.Icon color={"#40bced"}>
                        <i className="fas fa-map-marker-alt"></i>
                    </UserProfileComp.Icon>
                    location
                </UserProfileComp.IconBox>
            </UserProfileComp.UserInfoContainer>

            <UserProfileComp.Text>
                Item List
            </UserProfileComp.Text>

            <UserProfileComp.Text>
                Wish List
            </UserProfileComp.Text>
            <UserProfileComp.Break />
            <UserProfileComp.ItemListContainer>

                {renderItem()}
            </UserProfileComp.ItemListContainer>

        </UserProfileComp.InforContainer>;
    };

    console.log(props.non_auth_user);
    console.log(props.non_auth_user_listing);
    return <UserProfileComp>
        <UserProfileComp.Container>
            <UserProfileComp.IconContainer onClick={() => { history.goBack(); }}>
                <UserProfileComp.BackIcon />
                <UserProfileComp.BackText>Back</UserProfileComp.BackText>
            </UserProfileComp.IconContainer>

            <UserProfileComp.ContentContainer>
                <UserProfileComp.ImageContainer>
                    <UserProfileComp.PrimaryImage src={props.non_auth_user?.user?.avatar_url !== null ? props.non_auth_user?.user?.avatar_url : AVATAR} alt="Primary Image" />
                </UserProfileComp.ImageContainer>
                {renderInfor()}
            </UserProfileComp.ContentContainer>

        </UserProfileComp.Container>

    </UserProfileComp>;
};

UserProfile.propTypes = {
    getListing: PropTypes.func.isRequired,
    get_non_auth_user_profile: PropTypes.func.isRequiredm,
    non_auth_user: PropTypes.object.isRequired,
    non_auth_user_listing: PropTypes.object.isRequired,
};
const mapStateToProp = (state) => {
    return {
        non_auth_user: state.non_auth_user,
        non_auth_user_listing: state.listing,
    };
};
export default connect(mapStateToProp, { getListing, get_non_auth_user_profile })(UserProfile);
