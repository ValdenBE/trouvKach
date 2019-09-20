import React from "react";
import useStyles from "./styles";
import Btnclose from "./btnclose";
import Btnopen from "./btnopen";
import "@babel/polyfill";
import MainMap from "./map/main-map";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
//import Slider from "@material-ui/core/Slider";

function mainPage(props) {
    const [isClicked, setClicked] = React.useState();
    const [currentAtm, setAtm] = React.useState();
    const classes = useStyles();
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
        <div className={classes.mainContent}>
            {/* <Slider
                distance={props.distance}
                handleDistance={props.handleDistance}
            /> */}
            {/* <Slider
                value={props.distance}
                onInput={props.handleDistance}
                min={0}
                max={2000}
                step={10}
                valueLabelDisplay={"auto"}
            /> */}
            <MainMap
                className={classes.mainmap}
                atmArray={props.atmArray}
                userLat={props.userLat}
                userLng={props.userLng}
                currentAtm={currentAtm}
                bankArray={props.bankArray}
            />

            <div className={classes.ListDiv}>
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
                    const close = (
                        <Btnclose
                            bankName={bankAtm}
                            distance={getDistance(
                                element.latitude,
                                element.longitude,
                            )}
                            address={element.address}
                        />
                    );
                    const open = (
                        <Btnopen
                            distance={getDistance(
                                element.latitude,
                                element.longitude,
                            )}
                            dataOne={element.updated_at}
                        />
                    );
                    return (
                        <div className={classes.content} key={element._id}>
                            <button
                                type={"button"}
                                className={classes.button}
                                onClick={() => {
                                    setAtm([
                                        element.position.coordinates[1],
                                        element.position.coordinates[0],
                                    ]);
                                    setClicked(element._id);
                                }}>
                                {close}
                                <div
                                    className={
                                        isClicked === element._id
                                            ? classes.subdivOpen
                                            : classes.subdivClose
                                    }>
                                    {open}
                                    <div className={classes.buttonWrapper}>
                                        {element.empty ? (
                                            <button
                                                type={"button"}
                                                className={classes.buttonBis}
                                                variant={"outlined"}
                                                onClick={() => {
                                                    props.updateEmpty(
                                                        element._id,
                                                    );
                                                    element.empty = false;
                                                }}>
                                                {"Signaler Ok"}
                                            </button>
                                        ) : (
                                            <button
                                                type={"button"}
                                                className={classes.buttonBis}
                                                variant={"outlined"}
                                                onClick={() => {
                                                    props.updateEmpty(
                                                        element._id,
                                                    );
                                                    element.empty = true;
                                                }}>
                                                {"Signaler vide"}
                                            </button>
                                        )}
                                        {element.deleted_at === null ||
                                        element.deleted_at === "" ? (
                                            <button
                                                type={"button"}
                                                className={classes.buttonBis}
                                                variant={"outlined"}
                                                onClick={() => {
                                                    props.updateDelete(
                                                        element._id,
                                                    );
                                                    element.deleted_at =
                                                        "To delete";
                                                }}>
                                                {"N'existe plus"}
                                            </button>
                                        ) : (
                                            <p className={classes.spanWarning}>
                                                <ErrorOutlineIcon
                                                    className={
                                                        classes.warningIcon
                                                    }>
                                                    {" "}
                                                </ErrorOutlineIcon>
                                                {"N'est plus disponible"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return <div>{drawer}</div>;
}
export default mainPage;
