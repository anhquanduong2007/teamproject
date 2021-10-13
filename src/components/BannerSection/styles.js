const styles = () => {
  return {
    banner_section: {
      padding: "0 20px",
      justifyContent: "center",
    },
    banner_area: {
      padding: "0 15px",
      position: "relative",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "15px",
      "&:hover": {
        "& > a > div": {
          opacity: 1,
        },
      },
      "& > a": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      "& img": {
        maxWidth: "100%",
        objectFit: "fill",
        verticalAlign: "center",
        height: "auto"
      },
      "& > a > div": {
        position: "absolute",
        top: 0,
        left: 15,
        right: 15,
        bottom: 0,
        border: "10px solid rgba(0, 0, 0, 0.15)",
        transition: "0.3s",
        opacity: 0,
      },
    },
    banner_content: {
        position: "absolute",
        left: "40px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
        "& > h1": {
            textAlign: "center",
            margin: 0,
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: "2rem"
        },
        "& > a": {
            color: "#fff",
            textDecoration: "none",
            position: "relative",
            transition: "0.3s",
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: "1.05rem",
            "&:after": {
                content: "''",
                width: "100%",
                height: "3px",
                backgroundColor: "#fff",
                position: "absolute",
                bottom: "-5px",
                left: 0,
                transition: "0.3s",

            },
            "&:hover": {
                color: "#ff6a28",
                "&:after": {
                    backgroundColor: "#ff6a28",
                },
            },
        }
    }
  };
};
export default styles;
