import styled from "styled-components";
import { motion } from "framer-motion";
import { useSkips } from "../hooks/useSkip";
import SkipCard from "./SkipCard";
import { formatPrice } from "../utils/formatters";

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
  }
`;

const MobileSummary = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 56px;
  padding: 0.9rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--clr-card);
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.06);
  font-weight: 600;

  @media (min-width: 640px) {
    display: none;
  }
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
      {selectedSkip && (
        <MobileSummary>
          <strong>{selectedSkip.size} Yard Skip</strong>
          <span>
            {selectedSkip.size} yd<sup>3</sup>
          </span>

          <small style={{ fontWeight: 400 }}>
            ({selectedSkip.hire_period_days} d)
          </small>

          <strong style={{ marginLeft: "auto" }}>
            {formatPrice(selectedSkip.price_before_vat)}
          </strong>
        </MobileSummary>
      )}
      <MobileCTA enabled={!!selectedSkip} disabled={!selectedSkip}>
        Continue →
      </MobileCTA>
    </>
  );
}
