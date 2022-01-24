import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes";


const ItemRouters = () => {
    return (
        <Switch>
            <Route exact path={`${ROUTES.SEARCH}/:term/:id`}>
                <SearchResult />
            </Route>
        </Switch>
    );
};
export default ItemRouters;