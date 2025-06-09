import styled from "styled-components";
import { motion } from "framer-motion";
import { useSkips } from "../hooks/useSkip";
import SkipCard from "./SkipCard";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileCTA = styled(motion.button)<{ enabled: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 600;
  color: #fff;
  background: ${({ enabled }) => (enabled ? "var(--clr-accent)" : "#c0c0c0")};

  @media (min-width: 640px) {
    display: none;
  } /* hide on desktop */
`;

type Props = {
  selectedId: number | null;
  onSelect: (id: number) => void;
};

export default function SkipGrid({ selectedId, onSelect }: Props) {
  const { skips, loading, error } = useSkips();
  const selectedSkip = skips.find((s) => s.id === selectedId) ?? null;

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <Grid>
        {skips.map((s) => (
          <SkipCard
            key={s.id}
            skip={s}
            selected={selectedId === s.id}
            onSelect={onSelect}
          />
        ))}
      </Grid>

      <MobileCTA enabled={!!selectedSkip} disabled={!selectedSkip}>
        Continue →
      </MobileCTA>
    </>
  );
}
