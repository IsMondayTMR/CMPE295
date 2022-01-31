import React from "react";
import { ProfileComp } from "../styledComponents/export";
import ProfileRouter from "../router/ProfileRouters";
import * as ROUTES from "../router/routes";
const PersonalCenter = () => {
    return <ProfileComp>
        <ProfileComp.Container>
            <ProfileComp.NavContainer>
                <ProfileComp.RouteLink to={ROUTES.PROFILE}>
                    Profile
                </ProfileComp.RouteLink>
                <ProfileComp.RouteLink to={`${ROUTES.PROFILE}/history`}>
                    History
                </ProfileComp.RouteLink >
                <ProfileComp.RouteLink to={`${ROUTES.PROFILE}/listing`}>
                    Listing
                </ProfileComp.RouteLink >
                <ProfileComp.RouteLink to={`${ROUTES.PROFILE}/favorite`}>
                    Favorite
                </ProfileComp.RouteLink>
                <ProfileComp.RouteLink to={`${ROUTES.PROFILE}/setting`}>
                    Setting
                </ProfileComp.RouteLink>
            </ProfileComp.NavContainer>

            <ProfileRouter />
        </ProfileComp.Container>
    </ProfileComp>;
};

export default PersonalCenter;