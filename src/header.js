import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useLocation, Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  appbar: {
    marginTop: -148,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorel] = React.useState(null);
  const location = useLocation();
  const mobileView = useMediaQuery("(max-width:700px)");

  return (
    <React.Fragment>
      <div>
        <Hidden xsDown>
          {location.pathname === "/" && <div className="MainPicture" />}
        </Hidden>
      </div>
      <AppBar
        className={
          location.pathname === "/" && !mobileView ? classes.appbar : null
        }
        position="static"
        anchorel={anchorel}
      >
        <Toolbar>
          <Link to="/" className="Home">
            Home
          </Link>
          <div className="LogoContainer">
            <img className="Logo" alt="" src="/images/Logo.jpg" />
          </div>
          <Link to="/contact-us" className="Contact">
            Contact Us
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
