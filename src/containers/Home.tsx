import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Header } from "./../components/Header";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export const Home = () => {
  const styles = useStyles();
  const state = {
    cards: [
      {
        heading: "Heading",
        image: "https://source.unsplash.com/random",
        imageTitle: "Image Title",
        description: "This is the card description"
      },
      {
        heading: "Heading2",
        image: "https://source.unsplash.com/random",
        imageTitle: "Image Title",
        description: "This is the card description"
      },
      {
        heading: "Heading3",
        image: "https://source.unsplash.com/random",
        imageTitle: "Image Title",
        description: "This is the card description"
      }
    ]
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Header />
        <Container className={styles.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {state.cards.map(card => (
              <Grid item key={card.heading} xs={12} sm={6} md={4}>
                <Card className={styles.card}>
                  <CardMedia
                    className={styles.cardMedia}
                    image={card.image}
                    title={card.imageTitle}
                  />
                  <CardContent className={styles.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* End footer */}
    </React.Fragment>
  );
};
