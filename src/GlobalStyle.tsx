import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* — basic reset — */
  *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --clr-primary:#0d9488;
    --clr-accent :#f97316;
    --clr-bg     :#f8fafb;
    --clr-card   :#ffffff;
    --clr-text   :#111;
    --radius     : 1rem;
    --shadow     : 0 4px 10px rgba(0,0,0,.15);
  }

  body {
    font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    background:var(--clr-bg);
    color:var(--clr-text);
    line-height: 1.4;
  }
  button { cursor: pointer; border: none; background: none; }
`;
