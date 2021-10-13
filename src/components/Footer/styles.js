const styles = () => {
    return {
        footer_top: {
            marginTop: "50px",
            padding: "35px 0",
            borderTop: "1px solid #e4e4e4",
        },
        "newleter-content": {
            "& > p": {
                textAlign: "start",
                color: "#747474",
            },
            "& > input": {
                padding: "14px 10px",
                width: "100%",
                border: "1px solid #dddddd",
                color: "#747474",
                "&:focus": {
                    outline: "none !important",
                }
            },
            "& > button": {
                padding: "14px 10px",
                width: "100%",
                cursor: "pointer",
                marginTop: "15px",
                color: "#fff",
                backgroundColor: "#242424",
                textTransform: "uppercase",
                fontWeight: "600",
                outline: "none",
                border: "1px solid #242424",
                fontSize: "0.7rem",
                borderRadius: "3px",
                transition: "0.3s",
                "&:hover": {
                    background: "#ff6a28",
                    border: "1px solid #ff6a28",
                }
            }
           
        },
        contact_us: {
            padding: "0 20px",
        },
        "contact_us-icon": {
            "& > a": {
                fontSize: "1.2rem",
                color: "#b2b2b2",
                width: "40px",
                height: "40px",
                border: "1px solid #e1e1e1",
                backgroundColor: "#fff",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
                marginRight: "8px",
                transition: "all 0.3s ease 0s",
                "&:hover": {
                    backgroundColor: "#242424",
                    color: "#fff",
                    borderColor: "#242424",
                }
            }
        },
        footer_contact: {
            "& > p": {
                textAlign: "start",
                margin: 0,
                padding: "9px 0",
                color: "#747474",
                "& span": {
                    cursor: "pointer",
                    "&:hover":{
                        color: "#ff6a28",
                    }
                }
            }
        },
        widgets_container: {
            "& > h3": {
                textAlign: "start",
            }
        },
        footer_menu: {
            "& > a": {
                display: "block",
                color: "#747474",
                textDecoration: "none",
                padding: "5px 0",
                "&:hover": {
                    color: "#ff6a28",
                }
            }
        },
        footer_bottom: {
            
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #e4e4e4",
            height: "60px",
            
        },
        copyright_area: {
            display: "flex",
            justifyContent: "center",
            "& > p": {
                "& > span": {
                    color: "#ff6a28",
                    cursor: "pointer",
                    fontWeight: "bold",
                    "&:hover": {
                        textDecoration: "underline"
                    }
                }
            }
            
        },
        footer_custom_links: {
            "& > a": {
                padding: "0 10px",
                color: "#747474",
                textDecoration: "none",
                "&:hover": {
                    color: "#ff6a28",
                }
            }
        }
    };
};
export default styles;