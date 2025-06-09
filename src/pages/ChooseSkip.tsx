import styled from "styled-components";
import SkipGrid from "../components/SkipGrid";

const Wrapper = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 1rem 5rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export default function ChooseSkip() {
  return (
    <Wrapper>
      <Title>Choose your skip size</Title>
      <SkipGrid />
    </Wrapper>
  );
}
