import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from '../header/ThemeToggle';
import HomeHero from '../hero/homehero';
import Header from '../header/header';
import Contact from '../contact/contact';

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

function getActiveImageAlt() {
  const imgs = screen.getAllByRole('img').filter(img => /Imagem \d+/.test(img.getAttribute('alt') || ''));
  for (const img of imgs) {
    const slide = img.closest('[aria-hidden]');
    if (slide && slide.getAttribute('aria-hidden') === 'false') return img.getAttribute('alt');
  }
  return null;
}

describe('App buttons smoke tests', () => {
  test('ThemeToggle button toggles theme', async () => {
    mockMatchMedia(false);
    localStorage.clear();
    render(<ThemeToggle />);

    const btn = screen.getByRole('button', { name: /Alternar tema/i });
    expect(btn).toBeInTheDocument();

    await waitFor(() => expect(btn).toHaveAttribute('title'));
    await userEvent.click(btn);
    await waitFor(() => expect(document.documentElement.getAttribute('data-theme')).toBe('dark'));
  });

  test('HomeHero navigation buttons change slides', async () => {
    render(<HomeHero />);
    const nextBtn = screen.getByRole('button', { name: /Próximo/i });
    const prevBtn = screen.getByRole('button', { name: /Anterior/i });

    expect(getActiveImageAlt()).toBe('Imagem 1');
    await userEvent.click(nextBtn);
    expect(getActiveImageAlt()).toBe('Imagem 2');
    await userEvent.click(prevBtn);
    expect(getActiveImageAlt()).toBe('Imagem 1');
  });

  test('Header menu button toggles aria-expanded', async () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: /Abrir Menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('Contact submit button is present and has type submit', () => {
    render(<Contact />);

    const submit = screen.getByRole('button', { name: /Enviar/i });
    expect(submit).toBeInTheDocument();
    expect(submit).toHaveAttribute('type', 'submit');
  });
});
