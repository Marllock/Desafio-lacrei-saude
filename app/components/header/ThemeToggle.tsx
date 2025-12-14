'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ThemeButton = styled.button`
  background: none;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-70);
  transition: background-color 100ms, color 100ms;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  /* Apply hover only on devices that actually have hover */
  @media (hover: hover) {
    &:hover {
      background-color: var(--color-green-20);
    }
  }

  /* Use focus-visible to avoid sticky focus styles after tap */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-emerald-60);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-emerald-60);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('theme');
    const initial = saved
      ? saved === 'dark'
      : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(initial);
  }, []);

  useEffect(() => {
    if (isDark === null) return;
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);

  const toggleTheme = () => {
    // if not yet initialized, assume light
    const current = isDark ?? false;
    const newIsDark = !current;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  // Render a stable server output: generic button with neutral title.
  if (!mounted || isDark === null) {
    return (
      <ThemeButton aria-label="Alternar tema" title="Alternar tema">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"></circle>
        </svg>
      </ThemeButton>
    );
  }

  return (
    <ThemeButton
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onTouchStart={(e) => e.preventDefault()}
      onPointerDown={(e) => e.preventDefault()}
      onClick={toggleTheme}
      aria-label="Alternar tema"
      title={isDark ? 'Modo Escuro' : 'Modo Claro'}
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </ThemeButton>
  );
}
