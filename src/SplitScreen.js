import styled from "styled-components";

// Container is the variable name given to the main div
const Container = styled.div`
  display: flex;
`;

// Pane is the variable name given to the div which Left and Right Components are being wrapped
const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

// SplitScreen is the functional component to split the screen
export const SplitScreen = ({
  // left: Left,
  // right: Right,
  children, //passing children prop
  leftWeight = 1, //default value is flex 1
  rightWeight = 1,
}) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>
        {/* <Left /> */}

        {/* using children prop */}
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {/* <Right /> */}

        {/* using children prop */}
        {right}
      </Pane>
    </Container>
  );
};
