import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
//import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import MainMap from "./map/main-map";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Portal from "@material-ui/core/Portal";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
        background: "transparent",
        border: "none",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(4),
        paddingTop: "88px",
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
    card: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    address: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

function ResponsiveDrawer(props) {
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const containerPortal = React.useRef(null);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    function getDistance(latAtm, longAtm) {
        const RAYON = 6378000;
        const radlat1 = (Math.PI * props.userLat) / 180;
        const radlat2 = (Math.PI * latAtm) / 180;
        const radlong1 = (Math.PI * props.userLng) / 180;
        const radlong2 = (Math.PI * longAtm) / 180;
        const dist =
            RAYON *
            (Math.PI / 2 -
                Math.asin(
                    Math.sin(radlat2) * Math.sin(radlat1) +
                        Math.cos(radlong2 - radlong1) *
                            Math.cos(radlat2) *
                            Math.cos(radlat1),
                ));
        return `${Math.floor(dist)} m`;
    }

    const drawer = (
        <div>
            <Divider />
            <List className={classes.addresslist}>
                {props.atmArray.map(element => (
                    <Button
                        key={element._id}
                        coords={element.position}
                        variant={"outlined"}
                        size={"large"}
                        color={"primary"}
                        className={classes.addressText}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color={"textSecondary"}
                                    gutterBottom>
                                    {"Belfius "}
                                    {getDistance(
                                        element.latitude,
                                        element.longitude,
                                    )}
                                </Typography>
                                <Typography
                                    className={classes.address}
                                    component={"h2"}>
                                    {element.address}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Button>
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
                        <Portal container={containerPortal.current}>
                            <MainMap
                                atmArray={props.atmArray}
                                userLat={props.userLat}
                                userLng={props.userLng}
                            />
                        </Portal>
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
