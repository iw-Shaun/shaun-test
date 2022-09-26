import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100%",
        "& .main": {
            margin: 0,
            padding: 0,
            width: "100vw",
            height: "200vw",
            minHeight: "100vh",
            position: "relative",
            "@media (min-width: 300px)": {
                "& .carousel-control-prev, & .carousel-control-next": {
                    width: "8vw",
                    height: "12vw",
                    margin: "100vw 7vw 0 9vw",
                },
            },
        },
    },
});

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
function carousel(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className="main">
                <div
                    id="carouselExampleIndicators"
                    class="carousel slide"
                    data-interval="false"
                    data-wrap="false"
                >
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Page1 />
                        </div>
                        <div class="carousel-item">
                            <Page2 />
                        </div>
                        <div class="carousel-item">
                            <Page3 />
                        </div>
                    </div>
                    <a
                        class="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    ></a>
                    <a
                        class="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    ></a>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(carousel);
