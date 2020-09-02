import React from 'react';
import { Section } from "./styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();

  return (
    <Section>
     <div>
       <h1>
         Get out and stretch your imagination
       </h1>
       <h5>
         Plan a different kind of getaway to uncover the hidden gems near you.
       </h5>
       <Button
         onClick={() => history.push("/search")}
         variant="outline"
       >
         Explorer Nearby
       </Button>
     </div>
    </Section>
  );
};

export default Banner;
