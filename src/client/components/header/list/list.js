import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import MainMap from "./display/map/main-map";
import Typography from "@material-ui/core/Typography";

import Portal from "@material-ui/core/Portal";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        marginTop: "64px",
        width: "350px",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(4),
        paddingTop: "88px",
    },
    addressText: {
        span: {fontSize: "0.5rem"},
    },
    // infos: {
    //     justifyContent: "space-around",
    //     display: "flex",
    // },
    alert: {
        padding: theme.spacing(1),
        margin: theme.spacing(1, 0),
        border: "1px solid",
        borderColor: theme.palette.text.primary,
    },
}));

function ResponsiveDrawer(props) {
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const containerPortal = React.useRef(null);

    function handleClick() {
        setShow(!show);
    }

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <Divider />
            <List className={classes.addresslist}>
                {props.atmArray.map(element => (
                    <ListItem
                        button
                        onClick={handleClick}
                        key={element._id}
                        coords={element.position}>
                        <Divider />
                        <ListItemText className={classes.addressText}>
                            {element.address}
                            <Divider />
                        </ListItemText>
                        <Divider />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />

            <nav className={classes.drawer} aria-label={"mailbox folders"}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation={"css"}>
                    <Drawer
                        container={container}
                        variant={"temporary"}
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation={"css"}>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant={"permanent"}
                        open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <Typography paragraph>
                    <span className={classes.infos}>
                        {show ? (
                            <Portal container={containerPortal.current}>
                                <MainMap
                                    atmArray={props.atmArray}
                                    userLat={props.userLat}
                                    userLng={props.userLng}
                                />
                            </Portal>
                        ) : null}
                    </span>
                </Typography>
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element,
    ),
};

export default ResponsiveDrawer;
