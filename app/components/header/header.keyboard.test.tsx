import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './header';

describe('Header (keyboard accessibility)', () => {
  test('Enter no botão de menu alterna o menu mobile', async () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: /Abrir Menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    menuButton.focus();
    await userEvent.keyboard('{Enter}');
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Pressionar Enter novamente fecha
    await userEvent.keyboard('{Enter}');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
