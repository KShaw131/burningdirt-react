import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Link } from "@material-ui/core";

export type FooterProps = {};

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        burningdirt.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export const MyFooter = (props: FooterProps) => {
  const {} = props;
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  );
};
