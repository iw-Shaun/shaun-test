import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Modal from "react-modal";
import robot from "./tw.png";
import redux from "./tw01.png";

Modal.setAppElement("#main");
const gameRuleDialogStyles = {
    overlay: {
        background: "rgba(0, 0, 0, 0.8)",
        zIndex: 100,
    },
    content: {
        top: "35vh",
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
};

import "./scratch_off_script.js";
const styles = () => ({
    root: {
        width: "100vw",
        height: "100%",
        "& .main": {
            width: "100vw",
            height: "200vw",
            minHeight: "100vh",
            position: "relative",
            display: "flex",
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

function lottery(props) {
    const { classes } = props;
    const [openGameRuleDialog, setOpenGameRuleDialog] = useState(false);

    useEffect(() => {
        var el = document.getElementById("redux");
        el.addEventListener("load", init, false);
        function init() {
            $("#redux").eraser({ size: 50, set: setOpenGameRuleDialog });
        }
    }, []);

    function onClickClose() {
        setOpenGameRuleDialog(false);
    }
    return (
        <div className={classes.root}>
            <div className="main">
                <img id="robot" src={robot} />
                <img id="redux" src={redux} />
            </div>
            <Modal
                isOpen={openGameRuleDialog}
                onRequestClose={onClickClose}
                style={gameRuleDialogStyles}
            >
                <div>刮完了！軒尼詩更多精彩活動等著妳</div>
                <Link to="/" onClick={onClickClose}>
                    回首頁
                </Link>
            </Modal>
        </div>
    );
}

export default withStyles(styles)(lottery);
