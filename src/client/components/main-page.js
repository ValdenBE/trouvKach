import React from "react";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import MainMap from "./map/main-map";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
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
    content: {
        flexGrow: 1,
        padding: theme.spacing(4),
        paddingTop: "88px",
    },
    buttonsList: {
        width: "100%",
        backgroundColor: "transparent",
    },
    card: {
        minWidth: 275,
        width: "350px",
        textAlign: "center",
        height: "60px",
        borderBottom: "1px solid black",
        borderRight: "1px solid black",
        background: "whitesmoke",
    },
    addresslist: {
        paddingTop: "6%",
        marginRight: "1%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
    },
    cardContent: {
        paddingBottom: 0,
    },
    btnTitle: {
        fontSize: 17,
    },
    btnaddress: {
        fontSize: 12,
    },
    ListDiv: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

function MainList(props) {
    const classes = useStyles();
    const drawer = (
        <div className={classes.ListDiv}>
            <MainMap
                className={classes.mainmap}
                atmArray={props.atmArray}
                userLat={props.userLat}
                userLng={props.userLng}
            />
            <List className={classes.addresslist}>
                {props.atmArray.map(element => (
                    <Button
                        className={classes.card}
                        key={element._id}
                        coords={element.position}>
                        <CardContent className={classes.cardContent}>
                            <Typography
                                variant={"h6"}
                                className={classes.btnTitle}>
                                {"Belfius"}
                            </Typography>
                            <Typography
                                className={classes.btnaddress}
                                variant={"body1"}>
                                {element.address}
                            </Typography>
                        </CardContent>
                    </Button>
                ))}
            </List>
        </div>
    );

    return <div>{drawer}</div>;
}

export default MainList;
