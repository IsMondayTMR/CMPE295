import React, { useEffect } from "react";
import { InvitComp } from "../../styledComponents/export";
// import * as ROUTES from "../../router/routes";
import IMAGE from "../../resources/1.jpg";
import AVATAR from "../../resources/maria-bo-schatzis-stream-profilpicture.jpg";
import * as ROUTES from "../../router/routes";
const Invitation = () => {
    useEffect(() => {

    });
    const renderInvitations = () => {
        return <InvitComp.Card>
            <InvitComp.StarterContainer>
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
                </InvitComp.Starter>


                <InvitComp.ButtonContainer>
                    <InvitComp.Button>
                        Accept
                    </InvitComp.Button>
                    <InvitComp.Button>
                        Decline
                    </InvitComp.Button>
                </InvitComp.ButtonContainer>
            </InvitComp.StarterContainer>
            <InvitComp.DetailContainer>
                <InvitComp.ItemContainer>
                    <InvitComp.RouteLink to={""}>
                        <InvitComp.Image src={IMAGE} />
                    </InvitComp.RouteLink>
                    <InvitComp.ItemInfor>
                        <InvitComp.ItemTitle>
                            Item1
                        </InvitComp.ItemTitle>
                        <InvitComp.ItemDesc>
                            Item1 desc
                        </InvitComp.ItemDesc>
                    </InvitComp.ItemInfor>
                </InvitComp.ItemContainer>
                <i className="fas fa-exchange"></i>
                <InvitComp.ItemContainer>
                    <InvitComp.RouteLink to={""}>
                        <InvitComp.Image src={IMAGE} />
                    </InvitComp.RouteLink>

                    <InvitComp.ItemInfor>
                        <InvitComp.ItemTitle>
                            Item2
                        </InvitComp.ItemTitle>
                        <InvitComp.ItemDesc>
                            Item2 desc
                        </InvitComp.ItemDesc>
                    </InvitComp.ItemInfor>
                </InvitComp.ItemContainer>
            </InvitComp.DetailContainer>
        </InvitComp.Card >;
    };
    return <InvitComp>
        Invitation
        <InvitComp.Container>
            {renderInvitations()}
            {renderInvitations()}
        </InvitComp.Container>

    </InvitComp>;
};

export default Invitation;