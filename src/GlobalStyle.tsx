import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* — basic reset — */
  *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --clr-primary: #2563eb;   /* royal blue */
    --clr-accent : #22c55e;   /* green CTA */
    --radius     : 1rem;
    --shadow     : 0 4px 10px rgba(0,0,0,.15);
  }

  body {
    font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    background : #f7f9fc;
    color      : #111;
    line-height: 1.4;
  }
  button { cursor: pointer; border: none; background: none; }
`;
