import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";

import "./act.js"
import "./animation.css"

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100%",
        "& .main": {
            position: "relative",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& .content": {
                top: "136vw",
                position: "absolute",
                "& .egg":{
                    width: "100vw",
                    height: "20vw",
                    margin:"10vw 0",
                    background: `top / contain url(${window.assetUrl(
                        `/images/gashapon/egg.png`
                    )}) no-repeat`,
                    opacity: 0,
                },
                "& .btn":{
                    width: "100vw",
                    height: "10vw",
                    background: `top / contain url(${window.assetUrl(
                        `/images/gashapon/cta.png`
                    )}) no-repeat`,
                },
            },
        },
    },
});

function gashapon(props) {
    const [act, setAct] = useState(false);
    const { classes } = props;

    useEffect(()=>{
        $("#redux").eraser({ clock:$('#clock'), btn:$('#btn'), egg:$('#egg') });
    },[])

    function action(){
        console.log("onAnimationEnd")
        $('#egg').removeClass('rotate-center');
        $('#btn').show();
    }

    return (
        <div className={classes.root}>
            <div className="main">
                <div className="con">
                    <img src="https://nnemp-product-1254101407.cos.ap-shanghai.myqcloud.com/activities/con-bg.png" alt=""/>
                    <div id="clock"></div>
                </div>
                <button id='btn'>啟動</button>
                <div className="content">
                    <div id='egg' className="egg" onAnimationEnd={action}></div>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(gashapon);
