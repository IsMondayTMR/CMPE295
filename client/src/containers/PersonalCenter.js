import React, { useState } from "react";
import { ProfileComp } from "../styledComponents/export";
import ProfileRouter from "../router/ProfileRouters";
import * as ROUTES from "../router/routes";
import tabs from "../const/profile";
const PersonalCenter = () => {

    const [active, setActive] = useState(0);
    const profileTabs = tabs.map((tab, index) => {
        if (tab === "Profile") {
            return <ProfileComp.RouteLink
                onClick={() => { setActive(index); }}
                active={active === index ? 1 : 0}
                to={ROUTES.PROFILE}
                key={index}>
                {tab}
            </ProfileComp.RouteLink>;
        }

        return <ProfileComp.RouteLink
            onClick={() => { setActive(index); }}
            active={active === index ? 1 : 0}
            to={`${ROUTES.PROFILE}/${tab}`}
            key={index}>
            {tab}
        </ProfileComp.RouteLink>;
    });

    return <ProfileComp>
        <ProfileComp.Container>
            <ProfileComp.NavContainer>
                {profileTabs}
            </ProfileComp.NavContainer>

            <ProfileRouter />
        </ProfileComp.Container>
    </ProfileComp>;
};

export default PersonalCenter;