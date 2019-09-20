import React from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    margin: {
        height: 50,
    },
});

const PrettoSlider = withStyles({
    root: {
        height: 10,
        width: 250,
        marginTop: "80px",
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
        "&:focus,&:hover,&$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

export default function CustomizedSlider(props) {
    const classes = useStyles();

    return (
        <div>
            <PrettoSlider
                onChange={props.handleDistance}
                value={props.distance}
                min={0}
                max={1000}
                step={10}
                valueLabelDisplay={"auto"}
                aria-label={"pretto slider"}
                defaultValue={500}
            />
            <div className={classes.margin} />
        </div>
    );
}
