const styles = () => {
  return {
    header_welcome: {
      padding: "0 30px;",
      background: "#242424",
      display: "flex",
      alignItems: "center",
    },
    welcome_text: {
      display: "flex",
      "& > p": {
        color: "#a9a9a9",
        fontSize: "0.8rem",
        "&:first-child": {
          position: "relative",
          marginRight: "20px",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "1px",
            height: "100%",
            backgroundColor: "#fff",
            right: "-10px",
            bottom: 0,
          },
        },
        "& > span": {
          color: "#fff",
        },
      },
    },
    acount: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      "& > div": {
        display: "flex",
        alignItems: "center",
        color: "#fff",
        cursor: "pointer",
        transition: "0.5s",
        "& > i": {
          color: "#6c6c6c",
          marginLeft: "3px",
          fontSize: "1.2rem",
          pointerEvents: "none",
        },
        "&:hover": {
          color: "#ff6a28",
        },
      },
    },
    header_main: {
      display: "flex",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px 50px",
    },
    header_content: {
      display: "flex",
      height: "150px",
      justifyContent: "center",
      alignItems: "center",
    },
    header_main_item: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:first-child": {
        justifyContent: "flex-start",
        "& > div": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #e1e1e1",
          width: "60%",
          borderRadius: "50px",
          padding: "10px 10px",
          "& > input": {
            border: "none",
            outline: "none",
            padding: "10px 10px",
            flex: 1,
          },
          "& > i": {
            fontSize: "1.2rem",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
                color: "#ff6a28", 
            }
          },
        },
        
      },
      "&:last-child": {
        color: "#747474",
        justifyContent: "flex-end",
        "& > div": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #e1e1e1",
          width: "30%",
          borderRadius: "50px",
          padding: "15px 10px",
          "& > i": {
            fontSize: "1.3rem",
            marginRight: "5px",
          },
        },
      },
    },
    navigation: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTop: "1px solid #e4e4e4",
      height: "50px",
      paddingTop: "20px",
      "& > a": {
        margin: "0 40px",
        textDecoration: "none",
        color: "#242424",
        "&:hover":{
          color: "#ff6a28",
        }
      },
    },
    sub_menu: {
      margin: "0 40px",
      cursor: "pointer",
      "&:hover": {
          color: "#ff6a28",
      }
    },
    active: {
      color: "#ff6a28 !important",
    },
  };
};
export default styles;
