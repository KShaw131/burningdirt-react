import React, { useEffect, useState } from "react";
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
import axios from "axios";

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

type InstagramPost = {
  id: string;
  caption: string;
  image: string;
};

export const Home = () => {
  const styles = useStyles();
  const [data, setData] = useState(Array<InstagramPost>());

  const state = {
    cards: [
      {
        heading: "Heading",
        image: "https://source.unsplash.com/random",
        imageTitle: "Image Title",
        description: "This is the card description"
      }
    ]
  };

  useEffect(() => {
    axios.get("https://www.instagram.com/kshaw131/?__a=1").then(result => {
      // setData(JSON.stringify(result.data));

      const profile = result.data.graphql.user;
      const username = profile.full_name;
      const feed = profile.edge_owner_to_timeline_media.edges as [];

      let parsed = Array<InstagramPost>();

      feed.forEach((post, i) =>
        parsed.push({
          //@ts-ignore
          id: post.node.id,
          //@ts-ignore
          caption: post.node.edge_media_to_caption.edges[0].text,
          //@ts-ignore
          image: post.node.thumbnail_src
        })
      );

      console.log(parsed);

      setData(parsed);
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Header />
        <Container className={styles.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {data.map(post => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card className={styles.card}>
                  <CardMedia
                    className={styles.cardMedia}
                    image={post.image}
                    title={post.image}
                  />
                  <CardContent className={styles.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.id}
                    </Typography>
                    <Typography>{post.caption}</Typography>
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
    </React.Fragment>
  );
};
