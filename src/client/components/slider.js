import React from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    margin: {
        height: 50,
    },
});
const marks = [
    {
        value: 200,
    },
    {
        value: 400,
    },
    {
        value: 600,
    },
    {
        value: 800,
    },
    {
        value: 1000,
    },
    {
        value: 1200,
    },
    {
        value: 1400,
    },
    {
        value: 1600,
    },
    {
        value: 1800,
    },
    {
        value: 2000,
    },
    {
        value: 2200,
    },
    {
        value: 2400,
    },
    {
        value: 2600,
    },
    {
        value: 2800,
    },
    {
        value: 3000,
    },
];
const PrettoSlider = withStyles({
    root: {
        width: "67rem",
        height: "10px",
        paddingBottom: "0rem !important",
        paddingTop: "0rem !important",
        marginTop: "1rem",
        marginBottom: "-4.2rem",
        marginRight: "17rem",
        marginLeft: "2rem",
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
        marginTop: " 1.2rem",
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
    mark: {
        backgroundColor: "#bfbfbf",
        height: 4,
        width: 2,
        marginTop: 2.5,
    },
    markActive: {
        opacity: 1,
        backgroundColor: "currentColor",
    },
})(Slider);

export default function CustomizedSlider(props) {
    const classes = useStyles();

    return (
        <div>
            <PrettoSlider
                defaultValue={props.distance}
                onClick={props.handleDistance}
                min={200}
                max={3000}
                step={200}
                marks={marks}
                valueLabelDisplay={"auto"}
                aria-label={"pretto slider"}
            />
            <div className={classes.margin} />
        </div>
    );
}
