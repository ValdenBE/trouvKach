/* TokyoHotel/trouvkach
 *
 * /src/client/components/index/main.js - Main Index component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: "none",
    },
}));

const Index = props => {
    const classes = useStyles();
    if (!props.viewList) {
        return (
            <div>
                <p>{"Bonjour, je suis l'index !"}</p>
                <Button
                    variant={"outlined"}
                    color={"primary"}
                    className={classes.button}
                    onClick={props.handleViewListUpdate}>
                    {"START"}
                </Button>
            </div>
        );
    }
    return null;
};

export default Index;
