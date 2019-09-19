import React, {useState} from "react";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import MainMap from "./map/main-map";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import "@babel/polyfill";
const drawerWidth = "24rem";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        fontSize: "2rem",
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
        paddingTop: "8.rem",
    },
    buttonsList: {
        width: "100%",
        backgroundColor: "transparent",
    },
    card: {
        width: "100%",
        borderLeft: "1rem solid #16324F !important",
        border: "0.1rem solid #16324F",
        background: "whitesmoke",
        marginBottom: "0.5rem",
        justifyContent: "flex-start",
        textAlign: "left",
    },
    addresslist: {
        marginTop: "8rem",
        paddingTop: "0 !important",
        marginRight: "1rem",
        marginLeft: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "30%",
        height: "51rem",
        overflow: "auto",
    },
    cardContent: {
        padding: "0 !important",
        width: "100%",
    },
    btnTitle: {
        fontSize: "1.7rem",
        color: "#16324F",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "bold",
        fontStyle: "italic",
        width: "36.5rem",
    },
    btnaddress: {
        fontSize: "1.3rem",
    },
    ListDiv: {
        display: "flex",
        justifyContent: "space-between",
    },
    distance: {
        fontSize: "1rem",
        position: "absolute",
        right: 0,
        paddingRight: "0.5rem",
        color: "gray",
    },
    subdivOpen: {
        display: "block",
    },
    subdivClose: {
        display: "none",
    },
}));

function MainList(props) {
    const [currentAtm, setAtm] = useState();
    const [isClicked, setClicked] = useState(); // State for the "deploying" button
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
                bankArray={props.bankArray}
            />
            <List className={classes.addresslist}>
                {/* mapping on Atm array */}
                {props.atmArray.map(element => {
                    const matchingBank = props.bankArray.find(bank => {
                        if (element.bank !== null) {
                            return bank._id === element.bank;
                        }
                        return null;
                    });

                    const bankAtm = matchingBank
                        ? matchingBank.name
                        : "Banque inconnue";

                    if (element.address === null) {
                        element.address = "Adresse inconnue";
                    }
                    return (
                        <Button
                            className={classes.card}
                            key={element._id}
                            onClick={() => {
                                setAtm([
                                    element.position.coordinates[1],
                                    element.position.coordinates[0],
                                ]);
                                setClicked(element._id); // For deploying buttons.
                            }}>
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
                                    {bankAtm}
                                </Typography>
                                <Typography
                                    className={classes.btnaddress}
                                    variant={"body1"}>
                                    {element.address}
                                </Typography>
                                {/* Start of the inner content of buttons */}
                                <div
                                    className={
                                        isClicked === element._id
                                            ? classes.subdivOpen
                                            : classes.subdivClose
                                    }>
                                    <p>
                                        {
                                            "Ceci est mon contenu, il s'affiche au click"
                                        }
                                    </p>
                                    {element.empty ? (
                                        <Button
                                            className={classes.button}
                                            variant={"outlined"}
                                            onClick={() => {
                                                props.updateEmpty(element._id);
                                                element.empty = false;
                                            }}>
                                            {"Signaler Ok"}
                                        </Button>
                                    ) : (
                                        <Button
                                            className={classes.button}
                                            variant={"outlined"}
                                            onClick={() => {
                                                props.updateEmpty(element._id);
                                                element.empty = true;
                                            }}>
                                            {"Signaler vide"}
                                        </Button>
                                    )}
                                    {element.deleted_at === null ||
                                    element.deleted_at === "" ? (
                                        <Button
                                            className={classes.button}
                                            variant={"outlined"}
                                            onClick={() => {
                                                props.updateDelete(element._id);
                                                element.deleted_at =
                                                    "To delete";
                                            }}>
                                            {"N'existe plus"}
                                        </Button>
                                    ) : (
                                        <span>
                                            {"  a été marqué comme supprimé"}
                                        </span>
                                    )}
                                </div>
                                {/* Stop of inner content button */}
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
