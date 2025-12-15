import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
  test('renderiza footer com logo, redes sociais e ano atual', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    const logoLink = screen.getByRole('link', { name: /Logo da Lacrei Saúde/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');

    const fb = screen.getByLabelText(/Facebook da Lacrei Saúde/i);
    const ig = screen.getByLabelText(/Instagram da Lacrei Saúde/i);
    const li = screen.getByLabelText(/LinkedIn da Lacrei Saúde/i);

    expect(fb).toBeInTheDocument();
    expect(ig).toBeInTheDocument();
    expect(li).toBeInTheDocument();

    expect(fb).toHaveAttribute('href');
    expect(fb.getAttribute('href')).toContain('facebook.com');
    expect(ig.getAttribute('href')).toContain('instagram.com');
    expect(li.getAttribute('href')).toContain('linkedin.com');

    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
