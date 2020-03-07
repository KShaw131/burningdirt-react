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
import { MyHeader } from "./../components/MyHeader";
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

  useEffect(() => {
    axios.get("https://www.instagram.com/kshaw131/?__a=1").then(result => {
      const feed = result.data.graphql.user.edge_owner_to_timeline_media
        .edges as [];

      const parsed = feed.map(post => {
        return {
          //@ts-ignore
          id: post.node.id,
          //@ts-ignore
          caption: post.node.edge_media_to_caption.edges[0].node.text,
          //@ts-ignore
          image: post.node.thumbnail_src
        };
      });

      setData(parsed);
    });
  }, []);

  const showModal = (post: InstagramPost) => {};

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <MyHeader />
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
                    <Typography>{post.caption}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={post => showModal}
                    >
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
