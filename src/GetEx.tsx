import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

function GetEx() {
  const [countries, setCountries] = useState([]);

  function getCountries(): any {
    axios.get("https://restcountries.eu/rest/v2/all").then(
      (posRes) => {
        setCountries(posRes.data);
      },
      (errRes) => {
        console.log(errRes);
      }
    );
  }

  return (
    <div>
      <Button variant="contained" color="inherit" onClick={getCountries}>
        Countries
      </Button>
      <br></br>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SNO</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Capital</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Nativa Name</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Flag</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((element: any, index: any) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{element.name}</TableCell>
                <TableCell>{element.capital}</TableCell>
                <TableCell>{element.region}</TableCell>
                <TableCell>{element.nativeName}</TableCell>
                <TableCell>{element.population}</TableCell>
                <TableCell>
                  <img width="100" height="50" src={element.flag}></img>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default GetEx;
