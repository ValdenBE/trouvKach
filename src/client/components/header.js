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
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

    header: {
        backgroundColor: "#16324F",
    },
    button: {
        backgroundColor: "#2A628F",
    },
    title: {
        fontFamily: "Pacifico , cursive",
        fontSize: "40px",
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

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function SearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
    function clickFabian() {
        window.open("https://github.com/ValdenBE");
    }
    function clickFlorence() {
        window.open("https://github.com/Flovermeer");
    }
    function clickLindsay() {
        window.open("https://github.com/LVannebenne");
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.header} position={"fixed"}>
                <Toolbar>
                    <Typography className={classes.title} variant={"h6"} noWrap>
                        {"Trouvkach"}
                    </Typography>
                    <div>
                        <Button
                            className={classes.button}
                            aria-controls={"customized-menu"}
                            aria-haspopup={"true"}
                            variant={"contained"}
                            color={"primary"}
                            onClick={handleClick}>
                            {"GitHub"}
                        </Button>
                        <StyledMenu
                            id={"customized-menu"}
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                            <StyledMenuItem>
                                <ListItemText
                                    primary={"Florence"}
                                    onClick={clickFlorence}
                                />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemText
                                    primary={"Lindsay"}
                                    onClick={clickLindsay}
                                />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemText
                                    primary={"Fabian"}
                                    onClick={clickFabian}
                                />
                            </StyledMenuItem>
                        </StyledMenu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
