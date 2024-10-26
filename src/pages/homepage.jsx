import React from "react";
import { Hero } from "../styles/homepage.styled";
import { Container } from "../styles/container";

function Homepage() {
  return (
    <Hero>
      <Container>
        <div>
          <h1>PMSF WORKSHOP</h1>
          <p>A step to a bright future. Smart factories</p>
        </div>
      </Container>
    </Hero>
  );
}

export default Homepage;
