import "./../../App.css";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export const HomePage = () => {
  const history = useHistory();
  const gotoDashBoard = () => {
    history.push("/Dashboard");
  };

  return (
    <>
      <h1>Welcome to Computesphere homepage</h1>
      <Button variant="contained" color="primary" onClick={gotoDashBoard}>
        Go to Dashboard
      </Button>
    </>
  );
};
