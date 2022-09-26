import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
    root: {
        width: "100vw",
        height: "100%",
        "& .main": {
            width: "100vw",
            minHeight: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& #robot": {
                width: "50vw",
                position: "absolute",
                zIndex: 1,
            },
            "& #redux": {
                width: "50vw",
                position: "absolute",
                zIndex: 2,
            },
        },
    },
});

function Home(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className="main">
                <li>
                    <Link to="/lottery">刮刮樂</Link>
                </li>
                <li>
                    <Link to="/carousel">幻燈片</Link>
                </li>
                <li>
                    <Link to="/gashapon">轉蛋機</Link>
                </li>
            </div>
        </div>
    );
}

export default withStyles(styles)(Home);
