import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes";
import Profile from "../containers/PersonalCenter/Profile";
import Favorite from "../containers/PersonalCenter/Favorite";
import History from "../containers/PersonalCenter/History";
import Listing from "../containers/PersonalCenter/Listing";
import Setting from "../containers/PersonalCenter/Setting";
import Security from "../containers/PersonalCenter/Security";
import Invitation from "../containers/PersonalCenter/Invitation";
import Progressing from "../containers/PersonalCenter/Progressing";
const ProfileRouters = () => {
    return (

        <Switch>
            <Route exact path={ROUTES.PROFILE}>
                <Profile />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/Favorite`}>
                <Favorite />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/Progressing`}>
                <Progressing />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/History`}>
                <History />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/Listing`}>
                <Listing />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/Invitation`}>
                <Invitation />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/Setting`}>
                <Setting />
            </Route>
            <Route exact path={`${ROUTES.PROFILE}/Security`}>
                <Security />
            </Route>
        </Switch>
    );
};
export default ProfileRouters;