import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import TextField from "../atoms/textfield/TextField";
import Typography from "../atoms/typography/Typhography";
import Button from "../atoms/button/Button";
import Grid from "../atoms/grid/index"
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  const [user] = useContext(UserContext);
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent} style={{ marginTop: 10 }}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            text="Metroevent"
          />
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            text="Never Stop Learning, Because Life Never Stops Teaching."
            paragraph
          />

          <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent="center">
              <TextField label="Search Event" value="" className="trainer" />
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    text="Heading"
                  />
                  <Typography
                    text=" This is a media card. You can use this section to describe
                    the content."
                  />
                </CardContent>
                <CardActions>
                  <Link
                    to={user.role != "guest" ? "/detailevent" : "/signup"}
                    style={{ textDecoration: "none", padding: 10 }}
                  >
                    <Button size="small" color="primary" text="view" />
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default Home;
