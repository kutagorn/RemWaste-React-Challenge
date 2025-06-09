import styled from "styled-components";
import { formatPrice } from "../utils/formatters";
import type { Skip } from "../types/skip";

const Wrapper = styled.div`
  padding: 1.25rem;
  border-radius: var(--radius);
  background: var(--clr-card);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: 639px) {
    display: none;
  }
`;

const Size = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

const Meta = styled.p`
  font-size: 0.8rem;
  color: #555;
  margin: 0;
`;

const Price = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.2rem;
`;

export default function SummaryCard({ skip }: { skip: Skip }) {
  return (
    <Wrapper>
      <Size>{skip.size} Yard Skip</Size>
      <Meta>{skip.hire_period_days}-day hire (inc VAT)</Meta>
      <Price>{formatPrice(skip.price_before_vat)}</Price>
    </Wrapper>
  );
}
