import React, { useState, useEffect } from "react";
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
            height: "150vw",
            minHeight: "100vh",
            position: "relative",
        },
    },
});

function Page1(props) {
    const { classes } = props;
    const [dir, setDir] = useState("p1");

    const getBg = () => {
        return {
            background: `top / cover url(${window.assetUrl(
                `/images/intro/${dir}_entry_01.jpg`
            )}) no-repeat`,
        };
    };

    const getinfo = () => {};

    useEffect(() => {
        getinfo();
    }, []);

    return (
        <div className={classes.root}>
            <div className="main" style={getBg()}></div>
        </div>
    );
}

export default withStyles(styles)(Page1);
