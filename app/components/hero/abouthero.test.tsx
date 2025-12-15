import React from 'react';
import { render, screen } from '@testing-library/react';
import SobreHero from './abouthero';

describe('SobreHero', () => {
  test('renderiza títulos principais e imagens', () => {
    render(<SobreHero />);

    expect(screen.getByRole('heading', { name: /Sobre a Lacrei Saúde/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Propósito da Lacrei Saúde/i })).toBeInTheDocument();

    expect(screen.getAllByText(/Inclusão/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Acolhimento/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Segurança/i).length).toBeGreaterThanOrEqual(1);

    const imgs = screen.getAllByAltText(/Coração Pride/i);
    expect(imgs.length).toBeGreaterThanOrEqual(1);
  });
});
