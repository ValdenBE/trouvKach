import React from "react";
import useStyles from "./styles";

export default function Btnopen(props) {
    const classes = useStyles();

    return (
        <div>
            <hr className={classes.hr} />
            <p className={classes.btninfos}>
                {"A "}
                {props.distance}
            </p>
            <p className={classes.btninfos}>
                {"Créé le : "}
                {props.dataOne}
            </p>
        </div>
    );
}
