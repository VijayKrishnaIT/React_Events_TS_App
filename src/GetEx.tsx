import React from "react";
import axios from "axios";
import Button from "@material-ui/core";

function GetEx() {

    function [countries, setCountries] = useState();
    funtion getCountries():any{
        axios.get("https://restcountries.eu/rest/v2/all").then((posRes)=>{
            setCountries(posRes.data);
        }, (errRes)=>{
            console.log(errRes)
        })
    }
  return (
    <div>
      <Button variant="contained" color="inherit" onClick={getCountries()}>
        Countries
      </Button>
    </div>
  );
}

export default GetEx;
