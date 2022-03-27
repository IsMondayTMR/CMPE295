import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes";
import Profile from "../containers/PersonalCenter/Profile";
import Favorite from "../containers/PersonalCenter/Favorite";
import History from "../containers/PersonalCenter/History";
import Listing from "../containers/PersonalCenter/Listing";
import Setting from "../containers/PersonalCenter/Setting";
import Security from "../containers/PersonalCenter/Security";

const ProfileRouters = () => {
    return (

        <Switch>
            <Route exact path={ROUTES.PROFILE}>
                <Profile />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/favorite`}>
                <Favorite />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/history`}>
                <History />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/listing`}>
                <Listing />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/setting`}>
                <Setting />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/security`}>
                <Security />
            </Route>
        </Switch>
    );
};
export default ProfileRouters;