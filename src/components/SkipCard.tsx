import styled, { css } from "styled-components";
import type { Skip } from "../types/skip";

const Card = styled.button<{ selected: boolean }>`
  position: relative;
  padding: 1rem;
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
  transition: transform 0.15s;

  ${({ selected }) =>
    selected &&
    css`
      outline: 4px solid var(--clr-primary);
    `}

  &:hover {
    transform: translateY(-4px);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: var(--clr-primary);
  color: #fff;
  font-size: 0.65rem;
  padding: 0.15rem 0.45rem;
  border-radius: 9999px;
`;

const ImagePlaceholder = styled.div`
  height: 96px;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background: #ffdd55; /* swap for a real <img src=…> later */
`;

export default function SkipCard({
  skip,
  selected,
  onSelect,
}: {
  skip: Skip;
  selected: boolean;
  onSelect: (id: number) => void;
}) {
  return (
    <Card selected={selected} onClick={() => onSelect(skip.id)}>
      <Badge>
        {skip.size} yd<sup>3</sup>
      </Badge>

      <ImagePlaceholder />

      <p style={{ fontWeight: 600, fontSize: "1.125rem" }}>
        £{skip.price_before_vat}
      </p>
      <p style={{ fontSize: ".75rem", color: "#555" }}>
        {skip.hire_period_days}-day hire (inc VAT)
      </p>
    </Card>
  );
}
