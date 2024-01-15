import styled from "styled-components";

// Container is the variable name given to the main div
const Container = styled.div`
  display: flex;
`;

// Pane is the variable name given to the div which Left and Right Components are being wrapped
const Pane = styled.div`
  flex: 1;
`;

// SplitScreen is the functional component to split the screen
export const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
};
