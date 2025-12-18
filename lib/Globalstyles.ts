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

    /* Line heights */
    --lh-headline: 1.2;
    --lh-text: 1.5;

    /* Spacing unit (8px) and typography spacing tokens */
    --space-unit: 8px;
    /* Numeric spacing tokens (multiples of 8px) */
    --space-1: calc(1 * var(--space-unit)); /* 8px */
    --space-2: calc(2 * var(--space-unit)); /* 16px */
    --space-3: calc(3 * var(--space-unit)); /* 24px */
    --space-4: calc(4 * var(--space-unit)); /* 32px */
    --space-5: calc(5 * var(--space-unit)); /* 40px */
    --space-6: calc(6 * var(--space-unit)); /* 48px */
    --space-7: calc(7 * var(--space-unit)); /* 56px */
    --space-8: calc(8 * var(--space-unit)); /* 64px */

    /* Semantic heading spacing tokens (kept for compatibility) */
    --space-heading-underline: var(--space-1);
    --space-heading-subtitle: var(--space-2);
    --space-heading-other: var(--space-4); /* desktop default */
    --space-heading-other-mobile: var(--space-3);

    --space-text-paragraph: calc(2 * var(--space-unit));
    --space-text-control: calc(4 * var(--space-unit)); /* desktop default */
    --space-text-control-mobile: calc(3 * var(--space-unit));

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

  /* Typography spacing rules using tokens above */
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 var(--space-heading-other);
  }

  /* When a heading is followed by an inline divider/underline (span), keep a small gap */
  h1 + span, h2 + span, h3 + span, h4 + span, h5 + span, h6 + span {
    margin-top: var(--space-heading-underline);
  }

  /* Heading followed by a paragraph (subtitle) */
  h1 + p, h2 + p, h3 + p, h4 + p, h5 + p, h6 + p {
    margin-top: 0;
    margin-bottom: var(--space-heading-subtitle);
  }

  p {
    margin: 0 0 var(--space-text-paragraph);
  }

  /* Form controls spacing relative to surrounding text */
  label + input, label + textarea, label + select,
  input, textarea, select {
    margin-top: 0;
    margin-bottom: var(--space-text-control);
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

  /* Header & Footer spacing
     - Entre header e qualquer elemento: 48px (var(--space-6))
     - Entre footer e qualquer elemento anterior: 64px (var(--space-8))
     A regra do header deve prevalecer sobre outras regras de espaçamento. */
  header + * {
    margin-top: var(--space-6) !important;
  }

  * + footer {
    margin-top: var(--space-8);
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

  /* Mobile overrides (use 3*8px where spec requires 24px) */
  @media (max-width: 767px) {
    :root {
      --space-heading-other: var(--space-heading-other-mobile);
      --space-text-control: var(--space-text-control-mobile);

      /* Mobile semantic spacing tokens (based on mobile spec) */
      --space-header-gap: var(--space-3); /* 24px */
      --space-footer-gap: var(--space-8); /* 64px */

      --space-heading-underline: var(--space-1); /* 8px */
      --space-heading-subtitle: var(--space-2); /* 16px */
      --space-heading-other: var(--space-3); /* 24px */

      --space-text-paragraph: var(--space-2); /* 16px */
      --space-text-control: var(--space-3); /* 24px */

      --space-input-bullet: var(--space-2); /* 16px */
      --space-input-checkbox: var(--space-2); /* 16px */
      --space-input-input: var(--space-2); /* 16px */
      --space-input-radio: var(--space-3); /* 24px */

      --space-helper-helper: var(--space-1); /* 8px */
      --space-helper-input: var(--space-1); /* 8px */

      --space-image-vertical: var(--space-4); /* 32px */

      /* Outros */
      --space-accordion: var(--space-2); /* 16px */
      --space-breadcrumb: var(--space-3); /* 24px */
      --space-bullet: var(--space-1); /* 8px */
      --space-card: var(--space-2); /* 16px */
      --space-checkbox: var(--space-1); /* 8px */
      --space-divider: var(--space-3); /* 24px */
      --space-dropdown: var(--space-2); /* 16px */
      --space-progress-check: var(--space-3); /* 24px */
      --space-radio: var(--space-1); /* 8px */
      --space-sections-diff: var(--space-5); /* 40px */
      --space-tabbar-banner: var(--space-3); /* 24px */
      --space-form-margin: var(--space-5); /* 40px */
    }

    /* Mobile-specific spacing rules that follow the spec */
    header + * {
      margin-top: var(--space-header-gap) !important; /* 24px on mobile */
    }

    /* Ensure footer spacing remains as specified (64px) */
    * + footer {
      margin-top: var(--space-footer-gap);
    }

    /* Images: vertical spacing between an image and another element */
    img, picture, figure {
      display: block;
      max-width: 100%;
    }

    img + *, * + img, picture + *, * + picture, figure + *, * + figure {
      margin-top: var(--space-image-vertical);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    line-height: var(--lh-headline);
  }

  /* Base line-height for body copy and form controls */
  p, label, input, textarea, button {
    line-height: var(--lh-text);
  }

  button {
    cursor: pointer;
    font-family: var(--font-display);
  }
`;

export default GlobalStyles;