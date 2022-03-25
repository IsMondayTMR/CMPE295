import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes";
import Profile from "../components/PersonalCenter/Profile";
import Favorite from "../components/PersonalCenter/Favorite";
import History from "../components/PersonalCenter/History";
import Listing from "../components/PersonalCenter/Listing";
import Setting from "../components/PersonalCenter/Setting";
import Security from "../components/PersonalCenter/Security";

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