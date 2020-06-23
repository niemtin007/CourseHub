import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Box, CssBaseline, Typography } from "@material-ui/core";

import image404 from "../../assets/images/pageNotFound/image404.svg";
import rocket from "../../assets/images/pageNotFound/rocket.svg";
import earth from "../../assets/images/pageNotFound/earth.svg";
import moon from "../../assets/images/pageNotFound/moon.svg";
import astronaut from "../../assets/images/pageNotFound/astronaut.svg";
import overlay_stars from "../../assets/images/pageNotFound/overlay_stars.svg";
// import bg_purple from "../../assets/images/pageNotFound/bg_purple.png";

const useStyles = makeStyles((theme) => ({
  "@keyframes rocketMovement": {
    "100%": {
      transform: "translate(1200px, -600px)",
    },
  },

  "@keyframes spinEarth": {
    "100%": {
      transform: "rotate(-360deg)",
      transition: "transform 20s",
    },
  },

  "@keyframes moveAstronaut": {
    "100%": {
      transform: "translate(-160px, -160px)",
    },
  },

  "@keyframes rotateAstronaut": {
    "100%": {
      transform: "rotate(-720deg)",
    },
  },

  "@keyframes glowStar": {
    "40%": {
      opacity: 0.3,
    },

    "90%, 100%": {
      opacity: 1,
      transform: "scale(1.2)",
      borderRadius: 999999,
    },
  },

  bgPurple: {
    // background: `url(${bg_purple})`,
    backgroundColor: "#222425",
    backgroundRepeat: "repeat-x",
    backgroundSize: "cover",
    backgroundPosition: "left top",
    height: "100vh",
    overflow: "hidden",
  },

  stars: {
    background: `url(${overlay_stars})`,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundPosition: "left top",
  },

  centralBody: {
    padding: "17% 5% 10% 5%",
    textAlign: "center",
  },

  image404: {
    position: "relative",
    zIndex: 100,
    pointerEvents: "none",
  },

  btnGoHome: {
    position: "relative",
    zIndex: 200,
    margin: "15px auto",
    width: 170,
    padding: "10px 15px",
    border: "1px solid #FFCB39",
    borderRadius: 100,
    fontWeight: 400,
    display: "block",
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    letterSpacing: 2,
    fontSize: 11,
    transition: "all 0.3s ease-in",

    "&:hover": {
      backgroundColor: "#FFCB39",
      color: "#fff",
      transform: "scale(1.05)",
      boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.1)",
    },
  },

  "objects img": {
    zIndex: 90,
    pointerEvents: "none",
  },

  objectRocket: {
    zIndex: 95,
    position: "absolute",
    transform: "translateX(-50px)",
    top: "75%",
    pointerEvents: "none",
    animation: `$rocketMovement 200s linear infinite both running`,
  },

  objectEarth: {
    position: "absolute",
    top: "20%",
    left: "15%",
    zIndex: 90,
    animation: `$spinEarth`,

    "&:hover": {
      transition: "ease 200s !important",
      transform: "rotate(-3600deg) !important",
    },
  },

  objectMoon: {
    position: "absolute",
    top: "12%",
    left: "25%",
  },

  boxAstronaut: {
    zIndex: "110 !important",
    position: "absolute",
    top: "60%",
    right: "20%",
    willChange: "transform",
    animation: `$moveAstronaut 50s infinite linear both alternate`,
  },

  objectAstronaut: {
    animation: `$rotateAstronaut 200s infinite linear both alternate`,
  },

  star: {
    position: "absolute",
    borderRadius: "100%",
    backgroundColor: "#fff",
    width: 3,
    height: 3,
    opacity: 0.3,
    willChange: "opacity",

    "&>:nth-child(1)": {
      top: "80%",
      left: "25%",
      animation: "glowStar 2s infinite ease-in-out alternate 1s",
    },

    "&>:nth-child(2)": {
      top: "20%",
      left: "40%",
      animation: "glowStar 2s infinite ease-in-out alternate 3s",
    },

    "&>:nth-child(3)": {
      top: "25%",
      left: "25%",
      animation: "glowStar 2s infinite ease-in-out alternate 5s",
    },

    "&>:nth-child(4)": {
      top: "75%",
      left: "80%",
      animation: "glowStar 2s infinite ease-in-out alternate 7s",
    },

    "&>:nth-child(5)": {
      top: "90%",
      left: "50%",
      animation: "glowStar 2s infinite ease-in-out alternate 9s",
    },
  },

  "@media only screen and (max-width: 600px)": {
    boxAstronaut: {
      top: "70%",
    },

    centralBody: {
      paddingTop: "25%",
    },
  },
}));

const PageNotFound = ({ history }) => {
  const styles = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user && user.maLoaiNguoiDung === "GV";
  const [isAdminRouter, setIsAdminRouter] = useState(null);
  const pathName = history.location.pathname;

  if (!isAdminRouter) {
    if (pathName === "/courses-management") {
      setIsAdminRouter(true);
    } else if (pathName === "/users-management") {
      setIsAdminRouter(true);
    }
  }

  if (isAdminRouter && isAdmin) {
    window.location.reload();
  }

  return (
    <Box className={styles.bgPurple}>
      <CssBaseline />
      {isAdminRouter && isAdmin ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
        >
          <Typography variant="h5" style={{ color: "white" }}>
            Granting permission to admin...
          </Typography>
        </Box>
      ) : (
        <Box className={styles.stars}>
          <Box className={styles.centralBody}>
            <img
              className={styles.image404}
              src={image404}
              alt="image404"
              width="300px"
            />
            <Link to="/" className={styles.btnGoHome}>
              <Typography>GO BACK HOME</Typography>
            </Link>
          </Box>
          <Box className={styles.objects}>
            <img
              className={styles.objectRocket}
              src={rocket}
              alt="objectRocket"
              width="100px"
            />
            <Box>
              <img
                className={styles.objectEarth}
                src={earth}
                alt="objectEarth"
                width="100px"
              />
              <img
                className={styles.objectMoon}
                src={moon}
                alt="objectMoon"
                width="80px"
              />
            </Box>
            <Box className={styles.boxAstronaut}>
              <img
                className={styles.objectAstronaut}
                src={astronaut}
                alt="objectAstronaut"
                width="140px"
              />
            </Box>
          </Box>
          <Box className={styles.star}>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default withRouter(PageNotFound);
