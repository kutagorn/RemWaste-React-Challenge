import styled from "styled-components";
import {
  MapPin,
  Trash2,
  Package,
  ShieldCheck,
  Calendar,
  CreditCard,
} from "lucide-react";

const steps = [
  { icon: MapPin, label: "Postcode" },
  { icon: Trash2, label: "Waste Type" },
  { icon: Package, label: "Select Skip" },
  { icon: ShieldCheck, label: "Permit" },
  { icon: Calendar, label: "Date" },
  { icon: CreditCard, label: "Payment" },
];

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 0;
  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
`;

const Item = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ active }) => (active ? "var(--clr-primary)" : "#6b7280")};
  font-weight: ${({ active }) => (active ? 600 : 400)};
  svg {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    font-size: 0;
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export default function Stepper() {
  const activeIndex = 2;
  return (
    <nav aria-label="Checkout steps">
      <List>
        {steps.map(({ icon: Icon, label }, i) => (
          <Item key={label} active={i <= activeIndex}>
            <Icon strokeWidth={2} />
            <span>{label}</span>
          </Item>
        ))}
      </List>
    </nav>
  );
}
