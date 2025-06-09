import { useState } from "react";
import { useSkips } from "../hooks/useSkip";
import styled from "styled-components";
import Stepper from "../components/Stepper";
import SkipGrid from "../components/SkipGrid";
import SummaryCard from "../components/SummaryCard";
import DesktopCTA from "../components/DesktopCTA";

const Layout = styled.main`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 5rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;
const Subtitle = styled.p`
  margin: 0.25rem 0 1.75rem;
  color: #6b7280;
  font-size: 0.95rem;
`;

export default function ChooseSkip() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { skips } = useSkips();
  const selectedSkip = skips.find((s) => s.id === selectedId) ?? null;
  return (
    <Layout>
      <aside>
        <Stepper />
        {selectedSkip && (
          <>
            <SummaryCard skip={selectedSkip} />
            <DesktopCTA />
          </>
        )}
      </aside>

      <section>
        <Title>Choose your skip size</Title>
        <Subtitle>Select the skip size that best suits your needs</Subtitle>
        <SkipGrid selectedId={selectedId} onSelect={setSelectedId} />
      </section>
    </Layout>
  );
}
