'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-display: 'Nunito', sans-serif;
    --font-body: 'Inter', sans-serif;

    /* Emerald */
    --color-emerald-10: #dff2ed;
    --color-emerald-20: #b2dfd0;
    --color-emerald-30: #80cab1;
    --color-emerald-40: #4fb494;
    --color-emerald-50: #29a480;
    --color-emerald-60: #018762;
    --color-emerald-70: #007756;
    --color-emerald-80: #014c37;

    /* Green */
    --color-green-10: #ebf9f0;
    --color-green-20: #c4eed1;
    --color-green-30: #9ce2b2;
    --color-green-40: #75d693;
    --color-green-50: #4ecb74;
    --color-green-60: #00b15c;
    --color-green-70: #298a46;
    --color-green-80: #113b1e;

    /* Gray Colors */
    --color-gray-10: #ffffff;
    --color-gray-20: #f0f0f0;
    --color-gray-30: #cfcfcf;
    --color-gray-40: #bfbfbf;
    --color-gray-50: #737373;
    --color-gray-60: #515151;
    --color-gray-70: #2d2d2d;
    --color-gray-80: #131313;

    /* Typography */
    --text-headline-sm: 1.5rem;
    --text-headline-base: 2rem;
    --text-headline-lg: 2.5rem;
    --text-headline-xl: 3rem;

    --text-text-sm: 0.875rem;
    --text-text-base: 1rem;
    --text-text-xl: 1.125rem;

    /* Gradients Light Mode */
    --header-gradient-start: var(--color-green-10);
    --header-gradient-end: var(--color-gray-10);
    --footer-gradient-start: var(--color-gray-10);
    --footer-gradient-end: var(--color-green-20);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    height: 100%;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--color-gray-10);
    color: var(--color-gray-70);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  *:focus { outline: none; }
  *:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--color-emerald-30);
    border-radius: 4px;
  }

  .skip-link {
    position: absolute;
    left: -999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: 9999;
  }

  .skip-link:focus, .skip-link:focus-visible {
    left: 1rem;
    top: 1rem;
    width: auto;
    height: auto;
    padding: 0.5rem 1rem;
    background: var(--color-emerald-60);
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
  }

  /* Dark Mode */
  html[data-theme="dark"] {
    --color-gray-10: #0d0d0d;
    --color-gray-20: #1a1a1a;
    --color-gray-30: #2d2d2d;
    --color-gray-40: #404040;
    --color-gray-50: #b3b3b3;
    --color-gray-60: #cccccc;
    --color-gray-70: #e0e0e0;
    --color-gray-80: #f5f5f5;

    /* Gradients em dark mode usando paleta existente */
    --header-gradient-start: var(--color-emerald-80);
    --header-gradient-end: var(--color-gray-10);
    --footer-gradient-start: var(--color-gray-10);
    --footer-gradient-end: var(--color-emerald-70);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }

  button {
    cursor: pointer;
    font-family: var(--font-display);
  }
`;

export default GlobalStyles;