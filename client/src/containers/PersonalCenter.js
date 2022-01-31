import React, { useState } from "react";
import { ProfileComp } from "../styledComponents/export";
import ProfileRouter from "../router/ProfileRouters";
import * as ROUTES from "../router/routes";
const PersonalCenter = () => {

    const [active, setActive] = useState(0);


    return <ProfileComp>
        <ProfileComp.Container>
            <ProfileComp.NavContainer>
                <ProfileComp.RouteLink
                    onClick={() => { setActive(0); }}
                    active={active === 0 ? 1 : 0}
                    to={ROUTES.PROFILE}>
                    Profile
                </ProfileComp.RouteLink>
                <ProfileComp.RouteLink
                    onClick={() => { setActive(1); }}
                    active={active === 1 ? 1 : 0}
                    to={`${ROUTES.PROFILE}/history`}>
                    History
                </ProfileComp.RouteLink >
                <ProfileComp.RouteLink
                    onClick={() => { setActive(2); }}
                    active={active === 2 ? 1 : 0}
                    to={`${ROUTES.PROFILE}/listing`}>
                    Listing
                </ProfileComp.RouteLink >
                <ProfileComp.RouteLink
                    onClick={() => { setActive(3); }}
                    active={active === 3 ? 1 : 0}
                    to={`${ROUTES.PROFILE}/favorite`}>
                    Favorite
                </ProfileComp.RouteLink>
                <ProfileComp.RouteLink
                    onClick={() => { setActive(4); }}
                    active={active === 4 ? 1 : 0}
                    to={`${ROUTES.PROFILE}/setting`}>
                    Setting
                </ProfileComp.RouteLink>
            </ProfileComp.NavContainer>

            <ProfileRouter />
        </ProfileComp.Container>
    </ProfileComp>;
};

export default PersonalCenter;