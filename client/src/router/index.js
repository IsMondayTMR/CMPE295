import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
import * as ROUTES from "./routes";
import Support from "../containers/Support";
import SearchResult from "../containers/SearchResult";
import ItemDetail from "../components/ItemDetail";
import PersonalCenter from "../containers/PersonalCenter";
const Routers = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.DEFAULT}>
                <Home />
            </Route>
            <Route exact path={ROUTES.ABOUT}>
                <About />
            </Route>
            <Route exact path={ROUTES.SUPPORT}>
                <Support />
            </Route>
            <Route exact path={`${ROUTES.SEARCH}/:term`}>
                <SearchResult />
            </Route>
            <Route exact path={`${ROUTES.SEARCH}/:term/:id`}>
                <ItemDetail />
            </Route>
            <Route path={ROUTES.PROFILE}>
                <PersonalCenter />
            </Route>
        </Switch >
    );
};
export default Routers;