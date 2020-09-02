import React from 'react';
import {Navigation} from "./NavigationBarStyles";
import { Button } from "@material-ui/core";

const NavigationBar = () => {
  return (
    <>
      <Navigation>
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <div>
          <ul>
            <li><a href="#"><Button variant="outlined">Cancellation Flexibility</Button></a></li>
          </ul>
          <ul>
            <li><a href="#"><Button variant="outlined">Type of place</Button></a></li>
          </ul>
          <ul>
            <li><a href="#"><Button variant="outlined">Price</Button></a></li>
          </ul>
          <ul>
            <li><a href="#"><Button variant="outlined">Rooms and beds</Button></a></li>
          </ul>
          <ul>
            <li><a href="#"><Button variant="outlined">More filters</Button></a></li>
          </ul>
        </div>
      </Navigation>
    </>
  );
};

export default NavigationBar;
