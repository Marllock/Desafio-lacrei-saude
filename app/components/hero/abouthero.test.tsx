import React from 'react';
import { render, screen } from '@testing-library/react';
import SobreHero from './abouthero';

describe('SobreHero', () => {
  test('renderiza títulos principais e imagens', () => {
    render(<SobreHero />);

    // Headings
    expect(screen.getByRole('heading', { name: /Sobre a Lacrei Saúde/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Propósito da Lacrei Saúde/i })).toBeInTheDocument();

    // Cards (Nosso Compromisso) - some labels may appear more than once in the markup
    expect(screen.getAllByText(/Inclusão/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Acolhimento/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Segurança/i).length).toBeGreaterThanOrEqual(1);

    // Imagem(s) com alt
    const imgs = screen.getAllByAltText(/Coração Pride/i);
    expect(imgs.length).toBeGreaterThanOrEqual(1);
  });
});
