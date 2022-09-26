import React, { useEffect, useState, useRef } from "react";
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
            "& .cons":{
                "& .gashapon":{
                    width: "100vw",
                    height: "140vw",
                    background: `top / contain url(${window.assetUrl(
                        `/images/gashapon/轉蛋機.png`
                    )}) no-repeat`,
                    position: "relative",
                    "& .inner":{
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        "& .gegg":{
                            width: "20vw",
                            height: "20vw",
                            position: "absolute",
                            background: `top / contain url(${window.assetUrl(
                                `/images/gashapon/egg.png`
                            )}) no-repeat`,
                        },
                        "& .geggl":{
                            transform:"rotate(-30deg)",
                            width: "20vw",
                            height: "20vw",
                            position: "absolute",
                            background: `top / contain url(${window.assetUrl(
                                `/images/gashapon/egg.png`
                            )}) no-repeat`,
                        },
                        "& .geggr":{
                            transform:"rotate(30deg)",
                            width: "20vw",
                            height: "20vw",
                            position: "absolute",
                            background: `top / contain url(${window.assetUrl(
                                `/images/gashapon/egg.png`
                            )}) no-repeat`,
                        },
                    },
                    "& .content": {
                        top: "68vw",
                        position: "absolute",
                        "& .egg":{
                            width: "20vw",
                            height: "20vw",
                            left: "64vw",
                            position: "absolute",
                            background: `top / contain url(${window.assetUrl(
                                `/images/gashapon/egg.png`
                            )}) no-repeat`,
                            opacity: 0,
                        },
                        "& #btn":{
                            width: "50vw",
                            height: "10vw",
                            left: "12vw",
                            top: "10vw",
                            position: "absolute",
                        },
                    },
                },
            },
        },
    },
});

function gashapon2(props) {
    const [act, setAct] = useState(false);
    const { classes } = props;

    useEffect(()=>{
        $("#redux").eraser({ clock:$('#clock'), btn:$('#btn'), egg:$('#egg') });
    },[])

    function action(){
        console.log("onAnimationEnd")
        $('#egg').removeClass('rotate-center');
        [...Array(2)].map((x, i) => (
            $(`#gegg${i}`).removeClass('jump')
        ));
        [...Array(4)].map((x, i) => (
            $(`#gegg${i+2}`).removeClass('jumpl')
        ));
        [...Array(5)].map((x, i) => (
            $(`#gegg${i+6}`).removeClass('jumpr')
        ));
        $('#btn').show();
    }

    function actions(){
        [...Array(2)].map((x, i) => (
            $(`#gegg${i}`).addClass('jump')
        ));
        [...Array(4)].map((x, i) => (
            $(`#gegg${i+2}`).addClass('jumpl')
        ));
        [...Array(5)].map((x, i) => (
            $(`#gegg${i+6}`).addClass('jumpr')
        ));
    }

    return (
        <div className={classes.root}>
            <div className="main">
                <div className="cons">
                    <div className="gashapon">
                        <div className="inner">
                            <div id={"gegg0"} className="gegg" style={{left: "21vw",top: "31vw"}}></div>
                            <div id={"gegg1"} className="gegg" style={{left: "35vw",top: "34vw"}}></div>

                            <div id={"gegg2"} className="geggl" style={{left: "16vw",top: "48vw"}}></div>
                            <div id={"gegg3"} className="geggl" style={{left: "30vw",top: "49vw"}}></div>
                            <div id={"gegg4"} className="geggl" style={{left: "65vw",top: "48vw"}}></div>
                            <div id={"gegg5"} className="geggl" style={{left: "55vw",top: "16vw"}}></div>

                            <div id={"gegg6"} className="geggr" style={{left: "47vw",top: "49vw"}}></div>
                            <div id={"gegg7"} className="geggr" style={{left: "50vw",top: "31vw"}}></div>
                            <div id={"gegg8"} className="geggr" style={{left: "65vw",top: "31vw"}}></div>
                            <div id={"gegg9"} className="geggr" style={{left: "27vw",top: "16vw"}}></div>
                            <div id={"gegg10"} className="geggr" style={{left: "42vw",top: '17vw'}}></div>
                        </div>
                        <div className="content">
                            <div id='egg' className="egg" onAnimationEnd={action}></div>
                            <div id="btn" className="btn" onClick={actions}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(gashapon2);
