import React, {useState} from "react";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import MainMap from "./map/main-map";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import "@babel/polyfill";

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
        width: "100%",
        textAlign: "center",
        height: "5rem",
        borderLeft: "10px solid #16324F !important",
        border: "1px solid #16324F",
        background: "whitesmoke",
        marginBottom: "5px",
    },
    addresslist: {
        paddingTop: "6%",
        marginRight: "1%",
        marginLeft: "1%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "30%",
    },
    cardContent: {
        paddingBottom: 0,
    },
    btnTitle: {
        fontSize: 17,
        color: "#16324F",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "bold",
        fontStyle: "italic",
    },
    btnaddress: {
        fontSize: 13,
    },
    ListDiv: {
        display: "flex",
        justifyContent: "space-between",
    },
    distance: {
        fontSize: "10px",
        position: "absolute",
        right: 0,
        paddingRight: "5px",
        color: "gray",
    },
}));

function MainList(props) {
    const [currentAtm, setAtm] = useState();
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

    // const [showAtmPopup, setShowAtmPopup] = useState(false);

    // function showAtmPopUp() {
    //     setShowAtmPopup(true);
    // }

    // function hideAtmPopup() {
    //     setShowAtmPopup(false);
    // }

    const classes = useStyles();
    const drawer = (
        <div className={classes.ListDiv}>
            <MainMap
                className={classes.mainmap}
                atmArray={props.atmArray}
                userLat={props.userLat}
                userLng={props.userLng}
                currentAtm={currentAtm}
            />
            <List className={classes.addresslist}>
                {props.atmArray.map(element => {
                    if (element.address === null) {
                        element.address = "Adresse inconnue";
                    }
                    return (
                        <Button
                            className={classes.card}
                            key={element._id}
                            coords={element.position}
                            onClick={() =>
                                setAtm([
                                    element.position.coordinates[1],
                                    element.position.coordinates[0],
                                ])
                            }>
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.distance}>
                                    {"Distance :"}{" "}
                                    {getDistance(
                                        element.latitude,
                                        element.longitude,
                                    )}
                                </Typography>
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
                    );
                })}
            </List>
        </div>
    );

    return <div>{drawer}</div>;
}

export default MainList;
