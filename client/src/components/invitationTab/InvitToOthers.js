import React from "react";
import { InvitComp } from "../../styledComponents/export";
import * as ROUTES from "../../router/routes";
import IMAGE from "../../resources/defaultPlaceholder.png";
import AVATAR from "../../resources/maria-bo-schatzis-stream-profilpicture.jpg";

// import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { get_invitation_by_user } from "../../actions/invitationAction";
const InvitToOthers = (props) => {
    const renderInvitations = () => {
        if (props?.data == null || props.data.length == 0) {
            return <>
                No data yet!
            </>;
        }

        const cards = props?.data.map((invit, index) => {
            return <InvitComp.Card key={index}>
                <InvitComp.StarterContainer>
                    <InvitComp.Starter>
                        <InvitComp.RouteLink to={`${ROUTES.USER}/${invit?.receiver.sub}`}>
                            <InvitComp.Avatar src={invit?.receiver?.avatar_url > 0 ? invit?.receiver?.avatar_url : AVATAR} />
                            <InvitComp.UserInfor>
                                <InvitComp.Username>
                                    {invit?.receiver?.username}
                                </InvitComp.Username>
                                <InvitComp.UserId>
                                    {invit?.receiver?.sub}
                                </InvitComp.UserId>
                            </InvitComp.UserInfor>
                        </InvitComp.RouteLink>
                    </InvitComp.Starter>


                    <InvitComp.ButtonContainer>
                        <InvitComp.Button>
                            Cancel
                        </InvitComp.Button>
                    </InvitComp.ButtonContainer>
                </InvitComp.StarterContainer>
                <InvitComp.DetailContainer>
                    <InvitComp.ItemContainer>
                        <InvitComp.RouteLink to={`${ROUTES.PROFILE}/item/${invit?.item_to_provide?.id}`}>
                            <InvitComp.Image src={invit?.item_to_provide?.media_urls.length > 0 ? invit?.item_to_provide?.media_urls[0] : IMAGE} />
                        </InvitComp.RouteLink>
                        <InvitComp.ItemInfor>
                            <InvitComp.ItemTitle>
                                {invit?.item_to_provide?.title}
                            </InvitComp.ItemTitle>
                            <InvitComp.ItemDesc>
                                {invit?.item_to_provide?.description}
                            </InvitComp.ItemDesc>
                        </InvitComp.ItemInfor>
                    </InvitComp.ItemContainer>
                    <i className="fas fa-exchange"></i>
                    <InvitComp.ItemContainer>
                        <InvitComp.RouteLink to={`${ROUTES.PROFILE}/item/${invit?.item_to_receive?.id}`}>
                            <InvitComp.Image src={invit?.item_to_receive?.media_urls.length > 0 ? invit?.item_to_receive?.media_urls[0] : IMAGE} />
                        </InvitComp.RouteLink>

                        <InvitComp.ItemInfor>
                            <InvitComp.ItemTitle>
                                {invit?.item_to_receive?.title}
                            </InvitComp.ItemTitle>
                            <InvitComp.ItemDesc>
                                {invit?.item_to_receive?.description}
                            </InvitComp.ItemDesc>
                        </InvitComp.ItemInfor>
                    </InvitComp.ItemContainer>
                </InvitComp.DetailContainer>
            </InvitComp.Card >;
        });
        return cards;
    };

    return <React.Fragment>
        {renderInvitations()}
    </React.Fragment>;
};
InvitToOthers.propTypes = {
    data: PropTypes.array.isRequired,
};
export default InvitToOthers;