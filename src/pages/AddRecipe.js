import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 400,
    margin: "auto",
    marginTop: 120,
  },
}));

const AddRecipe = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className="add">
        <p>Rohit</p>
      </div>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}></Paper>
      </Grid>
    </>
  );
};

export default AddRecipe;
