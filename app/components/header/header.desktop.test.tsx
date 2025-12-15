import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header (desktop navigation)', () => {
  test('renderiza links de navegação desktop e o ThemeToggle', () => {
    render(<Header />);

    // NavDesktop contém os links principais mesmo que seja escondido por CSS
    const quemSomos = screen.getByRole('link', { name: /Quem somos/i });
    const contato = screen.getByRole('link', { name: /Contato/i });

    expect(quemSomos).toBeInTheDocument();
    expect(contato).toBeInTheDocument();

    // ThemeToggle também deve aparecer no nav desktop
    const themeButtons = screen.getAllByRole('button', { name: /Alternar tema/i });
    expect(themeButtons.length).toBeGreaterThanOrEqual(1);
  });
});
