import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}));

export const MyHeader = () => {
  const styles = useStyles();

  return (
    <div className={styles.heroContent}>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to Burning Dirt
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          We are just a group of weekend warriors doing it for the gram
        </Typography>
      </Container>
    </div>
  );
};
