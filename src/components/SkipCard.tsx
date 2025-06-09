import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import type { Skip } from "../types/skip";
import { skipImg } from "../assets/skipImgs";

const Card = styled(motion.button)<{ selected: boolean }>`
  position: relative;
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--clr-card);
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
const variants = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.35 } },
  hover: { y: -4, scale: 1.03 },
  select: {
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 18 },
  },
};

const Badge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: linear-gradient(135deg, var(--clr-primary) 0%, #02957d 100%);
  color: #fff;
  font-size: 0.65rem;
  padding: 0.15rem 0.45rem;
  border-radius: 9999px;
`;

const Thumb = styled.img.attrs({ loading: "lazy" })`
  height: 140px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  user-select: none;
  pointer-events: none;
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
    <Card
      selected={selected}
      onClick={() => onSelect(skip.id)}
      layout
      variants={variants}
      initial="initial"
      animate={selected ? "select" : "visible"}
      whileHover="hover"
      whileTap="tap"
    >
      <Badge>
        {skip.size} yd<sup>3</sup>
      </Badge>

      <Thumb src={skipImg(skip.size)} alt={`${skip.size} yard skip`} />

      <p style={{ fontWeight: 600, fontSize: "1.125rem" }}>
        £{skip.price_before_vat}
      </p>
      <p style={{ fontSize: ".75rem", color: "#555" }}>
        {skip.hire_period_days}-day hire (inc VAT)
      </p>
    </Card>
  );
}
