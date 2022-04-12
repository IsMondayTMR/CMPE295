import React from "react";
import { InvitComp } from "../../styledComponents/export";
import * as ROUTES from "../../router/routes";
import IMAGE from "../../resources/1.jpg";
import AVATAR from "../../resources/maria-bo-schatzis-stream-profilpicture.jpg";
import { connect } from "react-redux";
import { respond_invitation } from "../../actions/invitationAction";
import PropTypes from "prop-types";
// import { get_invitation_by_user } from "../../actions/invitationAction";
const InvitToMe = (props) => {

    const respondInvitation = (invitation_id, action) => {
        props.respond_invitation(invitation_id, action);
    };
    const renderInvitations = () => {
        if (props?.data == null || props.data.length == 0) {
            return <>
                No data yet!
            </>;
        }

        const cards = props?.data.map((invit, index) => {
            console.log(invit);
            return <InvitComp.Card key={index}>
                <InvitComp.StarterContainer>
                    <InvitComp.Starter>
                        <InvitComp.RouteLink to={`${ROUTES.USER}/${invit?.requestor.sub}`}>
                            <InvitComp.Avatar src={invit?.requestor?.avatar_url > 0 ? invit?.requestor?.avatar_url : AVATAR} />
                            <InvitComp.UserInfor>
                                <InvitComp.Username>
                                    {invit?.requestor?.username}
                                </InvitComp.Username>
                                <InvitComp.UserId>
                                    {invit?.requestor?.sub}
                                </InvitComp.UserId>
                            </InvitComp.UserInfor>
                        </InvitComp.RouteLink>
                    </InvitComp.Starter>
                    <InvitComp.Starter>
                        wants to provide <a>{invit?.item_to_receive?.title}</a> for <a>{invit?.item_to_provide?.title} </a>
                    </InvitComp.Starter>
                    <InvitComp.ButtonContainer>
                        <InvitComp.Button onClick={() => respondInvitation(invit?.id, "accept")}>
                            Accpet
                        </InvitComp.Button>
                        <InvitComp.Button onClick={() => respondInvitation(invit?.id, "reject")}>
                            Reject
                        </InvitComp.Button>
                    </InvitComp.ButtonContainer>
                </InvitComp.StarterContainer>
                <InvitComp.DetailContainer>
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
                    <i className="fas fa-exchange"></i>
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
                </InvitComp.DetailContainer>
            </InvitComp.Card >;
        });
        return cards;
    };

    return <React.Fragment>
        {renderInvitations()}
    </React.Fragment>;
};
InvitToMe.propTypes = {
    data: PropTypes.array.isRequired,
    respond_invitation: PropTypes.func.isRequired
};
export default connect(null, { respond_invitation })(InvitToMe);