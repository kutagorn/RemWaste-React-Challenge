import styled from "styled-components";
import Stepper from "../components/Stepper";
import SkipGrid from "../components/SkipGrid";

const Layout = styled.main`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export default function ChooseSkip() {
  return (
    <Layout>
      <Stepper />
      <section>
        <Title>Choose your skip size</Title>
        <SkipGrid />
      </section>
    </Layout>
  );
}
