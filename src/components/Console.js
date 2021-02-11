import React, {useState} from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  color: ${({ color }) => color || "white"};
  resize: none;
  &:focus {
    outline: none;
  }
`;

const Console = ({ color, ...props }) => {

  


  const [lines, setLines] = useState(["C/users/ULBI_TV>"]);

  const onKeyPress = (e) => {
    // eslint-disable-next-line eqeqeq
    if (e.charCode == "13") {
      setLines([...lines, "C/users/ULBI_TV>"]);
    }
  };

  return (
    <>
      <Flex>
        <Flex direction={"column"} margin="0 10px">
          {lines.map((t) => (
            <Line color={color}>{t}</Line>
          ))}
        </Flex>
        <StyledConsole onKeyPress={(e) => onKeyPress(e)} color={color} props={props} />
      </Flex>
    </>
  );
};

export default Console;
