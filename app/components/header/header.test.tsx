import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './header';

describe('Header (mobile menu)', () => {
  test('abre e fecha o menu ao clicar nos links', async () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: /Abrir Menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    const sobreLink = screen.getByRole('link', { name: /Quem somos/i });
    await userEvent.click(sobreLink);

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
