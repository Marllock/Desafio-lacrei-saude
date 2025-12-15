import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from './ThemeToggle';

function mockMatchMedia(matches = false) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

describe('ThemeToggle (keyboard)', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    mockMatchMedia(false);
  });

  test('ativação por teclado (Space/Enter) alterna tema', async () => {
    render(<ThemeToggle />);

    const btn = screen.getByRole('button', { name: /Alternar tema/i });
    await waitFor(() => expect(btn).toHaveAttribute('title', 'Modo Claro'));

    btn.focus();
    await userEvent.keyboard(' ');
    await waitFor(() => expect(document.documentElement.getAttribute('data-theme')).toBe('dark'));
    expect(localStorage.getItem('theme')).toBe('dark');

    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(document.documentElement.getAttribute('data-theme')).toBeNull());
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
