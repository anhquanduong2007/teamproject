const styles = () => {
  return {
    contact: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    breadcrumb_content: {
      display: "flex",
      justifyContent: "flex-start",
      "& > span": {
          "& > a": {
            color: "#747474",
            textDecoration: "none",
            "&:hover": {
                color: "#ff6a28", 
            }
          }
      }
    },
    contact_message: {
      "& > h1": {
        fontFamily: "'Balsamiq Sans', cursive",
      },
      padding: "0 20px 0 0",
      "& > ul": {
        listStyle: "none",
        margin: 0,
        padding: 0,
        "& > li": {
          padding: "20px 0",
          borderTop: "1px solid #e4e4e4",
          display: "flex",
          alignItems: "center",
          "& > i": {
            fontSize: "1.25rem",
            marginRight: "8px",
          },
          "& > span": {
            color: "#747474",
          },
          "& > a": {
            color: "#ff6a28",
            transition: "all 0.3s ease 0s",
            textDecoration: "none",
            "&:hover": {
              color: "#242424",
            },
          },
        },
      },
    },
    contact_form: {
      "& > h1": {
        fontFamily: "'Balsamiq Sans', cursive",
      },
      padding: "0 0 0 20px",
      "& > div": {
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
        "& > input": {
          padding: "14px 12px",
          color: "#747474",
          border: "1px solid #ddd",
          outline: "none",
        },
        "& > label": {
          marginBottom: "10px",
        },
        "& > textarea": {
          padding: "14px 12px",
          height: "170px",
          border: "1px solid #ddd",
          resize: "none",
          marginBottom: "20px",
          color: "#747474",
          outline: "none",
        },
      },
      "& > button": {
        width: "120px",
        height: "40px",
        border: "1px solid #ff6a28",
        background: "#ff6a28",
        cursor: "pointer",
        color: "#fff",
        fontWeight: 600,
        outline: "none",
        transition: "0.3s",
        textTransform: "uppercase",
        "&:hover": {
          background: "#242424",
          borderColor: "#242424",
        },
      },
    },
    map: {
        padding: "0 20px",
        marginTop: "60px",
        "& > iframe": {
            border: "none"
        }
    }
  };
};
export default styles;
