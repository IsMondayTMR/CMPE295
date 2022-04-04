import React, { useEffect, useState } from "react";
import { InvitComp } from "../../styledComponents/export";
// import * as ROUTES from "../../router/routes";
// import IMAGE from "../../resources/1.jpg";
// import AVATAR from "../../resources/maria-bo-schatzis-stream-profilpicture.jpg";
// import * as ROUTES from "../../router/routes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get_invitation_by_user } from "../../actions/invitationAction";
import InvitToMe from "../../components/invitationTab/InvitToMe";
import InvitToOthers from "../../components/invitationTab/InvitToOthers";
const Invitation = (props) => {

    const [tabOneHide, setTabOneHide] = useState(false);

    useEffect(() => {
        if (props?.user?.user?.sub != null) {
            props.get_invitation_by_user(props?.user?.user?.sub);
        }
    }, []);
    // const renderInvitations = () => {
    //     return <InvitComp.Card>
    //         <InvitComp.StarterContainer>
    //             <InvitComp.Starter>
    //                 <InvitComp.RouteLink to={`${ROUTES.USER}/123456789`}>
    //                     <InvitComp.Avatar src={AVATAR} />
    //                     <InvitComp.UserInfor>
    //                         <InvitComp.Username>
    //                             IsMondayTMR
    //                         </InvitComp.Username>
    //                         <InvitComp.UserId>
    //                             ID:123456789
    //                         </InvitComp.UserId>
    //                     </InvitComp.UserInfor>
    //                 </InvitComp.RouteLink>
    //             </InvitComp.Starter>


    //             <InvitComp.ButtonContainer>
    //                 <InvitComp.Button>
    //                     Accept
    //                 </InvitComp.Button>
    //                 <InvitComp.Button>
    //                     Decline
    //                 </InvitComp.Button>
    //             </InvitComp.ButtonContainer>
    //         </InvitComp.StarterContainer>
    //         <InvitComp.DetailContainer>
    //             <InvitComp.ItemContainer>
    //                 <InvitComp.RouteLink to={""}>
    //                     <InvitComp.Image src={IMAGE} />
    //                 </InvitComp.RouteLink>
    //                 <InvitComp.ItemInfor>
    //                     <InvitComp.ItemTitle>
    //                         Item1
    //                     </InvitComp.ItemTitle>
    //                     <InvitComp.ItemDesc>
    //                         Item1 desc
    //                     </InvitComp.ItemDesc>
    //                 </InvitComp.ItemInfor>
    //             </InvitComp.ItemContainer>
    //             <i className="fas fa-exchange"></i>
    //             <InvitComp.ItemContainer>
    //                 <InvitComp.RouteLink to={""}>
    //                     <InvitComp.Image src={IMAGE} />
    //                 </InvitComp.RouteLink>

    //                 <InvitComp.ItemInfor>
    //                     <InvitComp.ItemTitle>
    //                         Item2
    //                     </InvitComp.ItemTitle>
    //                     <InvitComp.ItemDesc>
    //                         Item2 desc
    //                     </InvitComp.ItemDesc>
    //                 </InvitComp.ItemInfor>
    //             </InvitComp.ItemContainer>
    //         </InvitComp.DetailContainer>
    //     </InvitComp.Card >;
    // };

    const renderTabs = () => {
        if (!tabOneHide) {
            let data = props.invitations?.invitations?.invitations_sent_to_me == undefined ? [] : props.invitations?.invitations?.invitations_sent_to_me;
            return <InvitToMe data={data} />;
        } else {
            let data = props.invitations?.invitations?.my_invitations == undefined ? [] : props.invitations?.invitations?.my_invitations;
            return <InvitToOthers data={data} />;
        }
    };
    return <InvitComp>
        <InvitComp.Container>
            <InvitComp.TabContainer>
                <InvitComp.TabButton
                    onClick={() => {
                        setTabOneHide(false);
                    }}>
                    Invitations to Me
                </InvitComp.TabButton>
                <InvitComp.TabButton
                    onClick={() => {
                        setTabOneHide(true);
                    }}>
                    Invitations to Others
                </InvitComp.TabButton>
            </InvitComp.TabContainer>
            <InvitComp.Break />
            {/* {renderInvitations(tabOneHide)}
            {renderInvitations(tabOneHide)} */}
            {renderTabs()}
        </InvitComp.Container>

    </InvitComp>;
};

Invitation.propTypes = {
    invitations: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    get_invitation_by_user: PropTypes.func.isRequired
};

const mapStateToProp = (state) => {
    return {
        invitations: state.invitations,
        user: state.user,
    };
};
export default connect(mapStateToProp, { get_invitation_by_user })(Invitation);