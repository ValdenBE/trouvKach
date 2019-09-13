/* TokyoHotel/trouvkach
 *
 * /src/client/components/index/main.js - Main Index component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    inputRoot: {
        color: "inherit",
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position={"fixed"}>
                <Toolbar>
                    <Typography className={classes.title} variant={"h6"} noWrap>
                        {"Trouvkach"}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
