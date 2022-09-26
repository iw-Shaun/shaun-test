import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import lottery from "./lottery/lottery";
import carousel from "./carousel/carousel";
import gashapon from "./gashapon/gashapon";
function Root() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/lottery" exact component={lottery} />
                <Route path="/carousel" exact component={carousel} />
                <Route path="/gashapon" exact component={gashapon} />
            </Switch>
        </BrowserRouter>
    );
}

export default Root;

if (document.getElementById("app")) {
    ReactDOM.render(<Root />, document.getElementById("app"));
}
