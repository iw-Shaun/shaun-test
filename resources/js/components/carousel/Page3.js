import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

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
            "& .bottom": {
                position: "absolute",
                top: "150vw",
                "& .click": {
                    width: "100vw",
                    height: "15vw",
                    "&.btn": {
                        background: `center / contain url(${window.assetUrl(
                            "/images/intro/2_intro_CTA.png"
                        )}) no-repeat`,
                    },
                },
            },
        },
    },
});

function Page3(props) {
    const { classes } = props;
    const [dir, setDir] = useState("p1");

    const getBg = () => {
        return {
            background: `top / cover url(${window.assetUrl(
                `/images/intro/${dir}_entry_03.jpg`
            )}) no-repeat`,
        };
    };

    const getinfo = () => {};

    useEffect(() => {
        getinfo();
    }, []);

    return (
        <div className={classes.root}>
            <div className="main" style={getBg()}>
                {/* <div className="title">
                    <div className="action logo"></div>
                </div>
                <div className="content">
                    <div className="style bg"></div>
                </div> */}
                <div className="bottom">
                    <Link to="/">
                        <div className="click btn"></div>
                    </Link>
                    {/* <div className="footer">
                        <div className="action warning"></div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(Page3);
