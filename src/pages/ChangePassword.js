import React from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "../atoms/textfield/TextField";
import Link from "@material-ui/core/Link";
import Typography from "../atoms/typography/Typhography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // Axios.post(`url`,{username:data.email,password:input.password})
    // .then((res)=>{
    //   if(res.data==="invalid username or password"){
    //     handleClickOpen()
    //   }else{
    //     setUser(res.data)
    //     localStorage.setItem("user", JSON.stringify({username: input.username, password: input.password}))
    //   }
    // })
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography text="Change Password" variant="h4" />
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <TextField
            {...register("email")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          /> */}
          <TextField
            {...register("newpassword")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="newpassword"
            label="New Password"
            type="newpassword"
            id="newpassword"
            autoComplete="new-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Change
          </Button>
        </form>
      </div>
    </Container>
  );
}
