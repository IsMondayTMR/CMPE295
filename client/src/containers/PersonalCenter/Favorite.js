import React, { useEffect } from "react";
import { ProfileComp, ProfileCardComp } from "../../styledComponents/export";
import { get_fav_by_user } from "../../actions";
import { connect } from "react-redux";
import IMAGE from "../../resources/1.jpg";
import PropTypes from "prop-types";
const Favorite = (props) => {

    useEffect(() => {
        props.get_fav_by_user(props?.user?.user?.sub);
    }, []);

    console.log(props.favList);
    const renderCard = () => {
        return (<ProfileCardComp.ListCard>
            <ProfileCardComp.Link>
                <ProfileCardComp.Img src={IMAGE} />
                <ProfileCardComp.InforContainer>
                    <ProfileCardComp.Title>Title</ProfileCardComp.Title>
                    <ProfileCardComp.Description>Description</ProfileCardComp.Description>
                    <ProfileCardComp.Donate >Donate</ProfileCardComp.Donate>
                </ProfileCardComp.InforContainer>
            </ProfileCardComp.Link>
            <ProfileCardComp.ButtonContainer>
                <ProfileCardComp.Button>remove</ProfileCardComp.Button>
            </ProfileCardComp.ButtonContainer>
        </ProfileCardComp.ListCard >);
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