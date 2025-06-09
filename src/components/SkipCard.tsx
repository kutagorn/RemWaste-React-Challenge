import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import type { Skip } from "../types/skip";
import { skipImg } from "../assets/skipImgs";
import { formatPrice } from "../utils/formatters";

const Card = styled(motion.button)<{ selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--clr-card);
  box-shadow: var(--shadow);
  transition: background 0.15s;

  ${({ selected }) =>
    selected &&
    css`
      background: rgba(13, 148, 136, 0.1);
    `}
`;
const variants = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.35 } },
  hover: { y: -4, scale: 1.03 },
  select: {
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 18 },
  },
};

const Name = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

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
  flex: 0 0 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
  user-select: none;
  pointer-events: none;
`;

const Info = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
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
      animate={selected ? "select" : "visible"}
      whileHover="hover"
      whileTap="tap"
    >
      <Badge>
        {skip.size} yd<sup>3</sup>
      </Badge>
      <Thumb src={skipImg(skip.size)} alt={`${skip.size} yard skip`} />
      <Info>
         <Name>{skip.size} Yard Skip</Name>{/* I don't get the name from json so I use {n} Yard Skip */}
        <p style={{ fontSize: ".75rem", color: "#555" }}>
          {skip.hire_period_days}-day hire (inc VAT)
        </p>
        <p style={{ fontWeight: 600 }}>{formatPrice(skip.price_before_vat)}</p>
      </Info>
    </Card>
  );
}
