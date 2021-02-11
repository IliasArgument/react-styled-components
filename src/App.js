import React from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
  padding: 2rem;
  color: white;
`;

function App() {
  return (
    
      <AppWrapper>
        <Flex justify="center">
          <Title color="green">Console end 2021. Ulbi TV</Title>
        </Flex>
        <Flex direction="column" margin="30px 0">
          <Console color={"green"} />
          <Button
            outlined
            color="green"
            align="flex-end"
          >
            Clicks
          </Button>
        </Flex>
      </AppWrapper>
    
  );
}

export default App;
