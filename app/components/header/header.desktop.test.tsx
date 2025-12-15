import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './header';

describe('Header (desktop navigation)', () => {
  test('renderiza links de navegação desktop e o ThemeToggle', () => {
    render(<Header />);

    const quemSomos = screen.getByRole('link', { name: /Quem somos/i });
    const contato = screen.getByRole('link', { name: /Contato/i });

    expect(quemSomos).toBeInTheDocument();
    expect(contato).toBeInTheDocument();

    const themeButtons = screen.getAllByRole('button', { name: /Alternar tema/i });
    expect(themeButtons.length).toBeGreaterThanOrEqual(1);
  });
});
