import { useState } from "react";
import styled from "styled-components";
import {  motion } from "framer-motion";
import { useSkips } from "../hooks/useSkip";
import SkipCard from "./SkipCard";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StickyCTA = styled(motion.button)<{ enabled: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem;
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

      <StickyCTA
        enabled={!!selected}
        disabled={!selected}
        animate={selected ? { scale: 1.03 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        Continue →
      </StickyCTA>
    </>
  );
}
