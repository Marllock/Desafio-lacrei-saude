import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomeHero from './homehero';

function getActiveImageAlt() {
  const imgs = screen.getAllByRole('img').filter(img => /Imagem \d+/.test(img.getAttribute('alt') || ''));
  for (const img of imgs) {
    const slide = img.closest('[aria-hidden]');
    if (slide && slide.getAttribute('aria-hidden') === 'false') return img.getAttribute('alt');
  }
  return null;
}

describe('HomeHero (carousel)', () => {
  test('renderiza conteúdo principal e botão', () => {
    render(<HomeHero />);

    expect(screen.getByRole('heading', { name: /Conheça a Lacrei Saúde/i })).toBeInTheDocument();
    expect(screen.getByText(/Saiba mais sobre a Lacrei Saúde/i)).toBeInTheDocument();

    const conhecer = screen.getByRole('link', { name: /Conhecer/i });
    expect(conhecer).toBeInTheDocument();
    expect(conhecer).toHaveAttribute('href', '/sobre');
  });

  test('navega com botões Próximo / Anterior', async () => {
    render(<HomeHero />);

    const nextBtn = screen.getByRole('button', { name: /Próximo/i });
    const prevBtn = screen.getByRole('button', { name: /Anterior/i });

    // inicialmente a imagem 1 está ativa
    expect(getActiveImageAlt()).toBe('Imagem 1');

    await userEvent.click(nextBtn);
    expect(getActiveImageAlt()).toBe('Imagem 2');

    await userEvent.click(nextBtn);
    expect(getActiveImageAlt()).toBe('Imagem 3');

    await userEvent.click(prevBtn);
    expect(getActiveImageAlt()).toBe('Imagem 2');
  });

  test('dots mudam a imagem ao clicar', async () => {
    render(<HomeHero />);

    const dot3 = screen.getByRole('button', { name: /Ir para imagem 3/i });
    await userEvent.click(dot3);
    expect(getActiveImageAlt()).toBe('Imagem 3');

    const dot1 = screen.getByRole('button', { name: /Ir para imagem 1/i });
    await userEvent.click(dot1);
    expect(getActiveImageAlt()).toBe('Imagem 1');
  });

  test('setas do teclado navegam o carousel', () => {
    render(<HomeHero />);

    // ArrowRight -> Imagem 2
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(getActiveImageAlt()).toBe('Imagem 2');

    // ArrowLeft -> volta para Imagem 1
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(getActiveImageAlt()).toBe('Imagem 1');
  });
});
