import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        fontSize: "2rem",
    },
    button: {
        width: "auto",
        height: "auto",
        borderLeft: "1rem solid #16324F !important",
        border: "0.1rem solid #16324F",
        background: "whitesmoke",
        marginBottom: "-0.8rem",
        justifyContent: "flex-start",
        textAlign: "left",

        color: "rgba(0, 0, 0, 0.87)",

        padding: "6px 16px",

        fontSize: "0.875rem",

        minWidth: "64px",

        boxSizing: "border-box",

        transition:
            "backgroundColor 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

        fontFamily: "Roboto, Helvetica, Arial, sans-serif",

        fontWeight: "500",

        lineHeight: "1.75",

        borderRadius: "4px",

        letterSpacing: "0.02857em",

        textTransform: "uppercase",
    },
    btnTitle: {
        marginTop: "-0.5rem",
        fontSize: "2rem",
        color: "#16324F",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "bold",
        fontStyle: "italic",
    },
    btnaddress: {
        marginTop: "-2rem",
        marginBottom: "1rem",
        fontSize: "1.3rem",
    },
    btninfos: {
        marginTop: "-1.5rem",
        fontSize: "1.3rem",
    },
    distance: {
        fontSize: "1rem",
        color: "gray",
        textAlign: "end",
        marginTop: "-0.5rem",
        marginRight: "-1rem",
        marginBottom: "0rem",
    },
    hr: {
        color: "#16324F",
        border: "0.1rem solid #16324F",
        width: "35rem",
        marginBottom: "3rem",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1.2rem",
    },
    mainContent: {
        display: "flex",
    },
    ListDiv: {
        overflow: "scroll",
        overflowX: "hidden",
        height: "51.6rem",
        marginTop: "8rem",
        width: "30%",
        marginLeft: "1rem",
        marginRight: "1rem",
    },
    subdivOpen: {
        display: "block",
    },
    subdivClose: {
        display: "none",
    },
    label: {
        display: " flex",

        flexWrap: "wrap",
    },
    btnClose: {
        marginBottom: "0.5rem",
    },
});
export default useStyles;
