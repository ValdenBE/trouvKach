import React from "react";
import useStyles from "./styles";

export default function Btnclose(props) {
    const classes = useStyles();

    return (
        <div className={classes.btnClose}>
            <p className={classes.distance}>
                {"Distance : "}
                {props.distance}
            </p>
            <p className={classes.btnTitle}>{props.bankName}</p>
            <p className={classes.btnaddress}>{props.address}</p>
        </div>
    );
}
