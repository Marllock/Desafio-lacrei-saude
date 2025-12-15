import React from 'react';
import { render, screen, within } from '@testing-library/react';
import SobreHero from './abouthero';

describe('SobreHero - Responsividade (unitária)', () => {
  test('tem a classe reverseOnMobile na seção de Propósito e imagem vem antes do título no DOM', () => {
    render(<SobreHero />);

    const propSection = screen.getByLabelText(/Propósito Lacrei Saúde/i);
    expect(propSection).toBeInTheDocument();

    expect(propSection.classList.contains('reverseOnMobile')).toBe(true);

    const img = within(propSection).getByAltText(/Coração Pride/i);
    const title = within(propSection).getByRole('heading', { name: /Propósito da Lacrei Saúde/i });

    expect(propSection).toContainElement(img);
    expect(propSection).toContainElement(title);

    const relation = img.compareDocumentPosition(title);
    const DOCUMENT_POSITION_FOLLOWING = 4;
    expect(Boolean(relation & DOCUMENT_POSITION_FOLLOWING)).toBe(true);
  });
});
