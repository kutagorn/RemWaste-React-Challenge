import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  font-weight: 600;
  color: #fff;
  background: var(--clr-accent);
  border-radius: var(--radius);

  @media (max-width: 639px) {
    display: none;
  } /* hide on mobile */
`;

export default function DesktopCTA({
  disabled = false,
}: {
  disabled?: boolean;
}) {
  return (
    <Btn disabled={disabled} style={{ opacity: disabled ? 0.6 : 1 }}>
      Continue →
    </Btn>
  );
}
