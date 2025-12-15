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

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    mockMatchMedia(false);
  });

  test('inicializa em modo claro quando não há preferência e alterna ao clicar', async () => {
    render(<ThemeToggle />);

    const btn = screen.getByRole('button', { name: /Alternar tema/i });
    expect(btn).toBeInTheDocument();

    // wait for mount & effect to set state
    await waitFor(() => expect(btn).toHaveAttribute('title', 'Modo Claro'));

    // clique para ativar escuro
    await userEvent.click(btn);
    await waitFor(() => expect(document.documentElement.getAttribute('data-theme')).toBe('dark'));
    expect(localStorage.getItem('theme')).toBe('dark');

    // clique para voltar claro
    await userEvent.click(btn);
    await waitFor(() => expect(document.documentElement.getAttribute('data-theme')).toBeNull());
    expect(localStorage.getItem('theme')).toBe('light');
  });

  test('respeita localStorage ao inicializar (dark)', async () => {
    localStorage.setItem('theme', 'dark');
    render(<ThemeToggle />);

    const btn = screen.getByRole('button', { name: /Alternar tema/i });
    await waitFor(() => expect(btn).toHaveAttribute('title', 'Modo Escuro'));
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
