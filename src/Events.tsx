// import React from "react";
// import Button from "@material-ui/core/Button";
// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
// import { makeStyles, Theme } from "@material-ui/core/styles";

// function Alert(props: AlertProps) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     width: "100%",
//     "& > * + *": {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function CustomizedSnackbars() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       <Button variant="outlined" onClick={handleClick}>
//         Open success snackbar
//       </Button>
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="success">
//           This is a success message!
//         </Alert>
//       </Snackbar>
//       <Alert severity="error">This is an error message!</Alert>
//       <Alert severity="warning">This is a warning message!</Alert>
//       <Alert severity="info">This is an information message!</Alert>
//       <Alert severity="success">This is a success message!</Alert>
//     </div>
//   );
// }

import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Events() {
  const [open, setOpen] = React.useState(false);
  const handleClose = (): any => {
    setOpen(false);
  };

  function login(arg1: string, arg2: string): any {
    if (arg1 === "admin" && arg2 === "admin") {
      setOpen(true);
    } else {
      alert("Login Failed");
    }
  }

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          login("admin", "admin");
        }}
      >
        Login
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}
