import React from 'react';
import { render, screen, within } from '@testing-library/react';
import SobreHero from './abouthero';

// Observação: grande parte da responsividade neste projeto é feita via CSS (media queries)
// e não via lógica JS, portanto não é possível alterar o comportamento visual apenas com
// jsdom/Jest. Este teste valida a presença da classe `reverseOnMobile` (que habilita a
// ordem invertida no mobile via CSS) e verifica a ordem dos elementos no DOM tal qual
// estão no markup (imagem antes do conteúdo). A verificação visual final deve ser feita
// no navegador/integração.

describe('SobreHero - Responsividade (unitária)', () => {
  test('tem a classe reverseOnMobile na seção de Propósito e imagem vem antes do título no DOM', () => {
    render(<SobreHero />);

    const propSection = screen.getByLabelText(/Propósito Lacrei Saúde/i);
    expect(propSection).toBeInTheDocument();

    // a classe que controla a ordem no CSS deve estar presente
    expect(propSection.classList.contains('reverseOnMobile')).toBe(true);

    // imagem e título (busca apenas dentro da seção para garantir o elemento correto)
    const img = within(propSection).getByAltText(/Coração Pride/i);
    const title = within(propSection).getByRole('heading', { name: /Propósito da Lacrei Saúde/i });

    // garante que ambos são filhos (diretos ou indiretos) da seção
    expect(propSection).toContainElement(img);
    expect(propSection).toContainElement(title);

    // verifica ordem no DOM: imagem aparece antes do título (markup atual)
    const relation = img.compareDocumentPosition(title);
    // DOCUMENT_POSITION_FOLLOWING indicates title comes after img
    const DOCUMENT_POSITION_FOLLOWING = 4;
    expect(Boolean(relation & DOCUMENT_POSITION_FOLLOWING)).toBe(true);
  });
});
