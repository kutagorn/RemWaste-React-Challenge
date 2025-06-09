import { useState } from "react";
import styled from "styled-components";
import { useSkips } from "../hooks/useSkip";
import SkipCard from "./SkipCard";

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;

const StickyCTA = styled.button<{ enabled: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  color: #fff;
  background: ${({ enabled }) => (enabled ? "var(--clr-accent)" : "#c0c0c0")};

  @media (min-width: 640px) {
    position: static;
    margin-top: 2rem;
  }
`;

export default function SkipGrid() {
  const { skips, loading, error } = useSkips();
  const [selected, setSelected] = useState<number | null>(null);

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <Grid>
        {skips.map((s) => (
          <SkipCard
            key={s.id}
            skip={s}
            selected={selected === s.id}
            onSelect={setSelected}
          />
        ))}
      </Grid>

      <StickyCTA enabled={!!selected} disabled={!selected}>
        Continue →
      </StickyCTA>
    </>
  );
}
