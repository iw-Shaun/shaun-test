import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import lottery from "./lottery/lottery";
import carousel from "./carousel/carousel";
import gashapon from "./gashapon/gashapon";
import gashapon2 from "./gashapon2/gashapon2";
import gsaptest from "./gsap/gsaptest";
function Root() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/lottery" exact component={lottery} />
                <Route path="/carousel" exact component={carousel} />
                <Route path="/gashapon" exact component={gashapon} />
                <Route path="/gashapon2" exact component={gashapon2} />
                <Route path="/gsap" exact component={gsaptest} />
            </Switch>
        </BrowserRouter>
    );
}

export default Root;

if (document.getElementById("app")) {
    ReactDOM.render(<Root />, document.getElementById("app"));
}
