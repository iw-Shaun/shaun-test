import React, { useRef, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { gsap, TimelineMax } from "gsap";

import "./style.css"
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

function gsaptest(props) {
    const { classes } = props;
    const boxRef = useRef();
    var tl = gsap.timeline({repeat:-1});

      
    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" ,repeat:-1});
        tl.to("#ball", .10, {transformOrigin: "50% 100%", scaleY:0.25, yoyo:true, repeat:1})
          .to("#ball", .75, {y:-400, yoyo:true, repeat:1});
    });

    return (
        <div className={classes.root}>
            <div className="main">
                <div id="ball"></div>
                <div className="App">
                    <div className="box" ref={boxRef}>Hello</div>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(gsaptest);
