import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactSection from './contact';

describe('ContactSection', () => {
  test('renderiza título, labels, inputs e botão', () => {
    render(<ContactSection />);

    expect(screen.getByRole('heading', { name: /Entre em contato/i })).toBeInTheDocument();

    const name = screen.getByLabelText(/Nome Completo/i);
    const email = screen.getByLabelText(/E-mail/i);
    const message = screen.getByLabelText(/Mensagem/i);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(message).toBeInTheDocument();

    const btn = screen.getByRole('button', { name: /Enviar Mensagem/i });
    expect(btn).toBeInTheDocument();
  });

  test('envia dados corretos quando o formulário é submetido', async () => {
    const user = userEvent.setup();
    const { container } = render(<ContactSection />);

    const form = container.querySelector('form') as HTMLFormElement | null;
    expect(form).not.toBeNull();

    let submitted: Record<string,string> | null = null;
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameEl = form.querySelector('#name') as HTMLInputElement | null;
      const emailEl = form.querySelector('#email') as HTMLInputElement | null;
      const messageEl = form.querySelector('#message') as HTMLTextAreaElement | null;
      submitted = {
        name: nameEl?.value ?? '',
        email: emailEl?.value ?? '',
        message: messageEl?.value ?? '',
      };
    });

    const name = screen.getByLabelText(/Nome Completo/i);
    const email = screen.getByLabelText(/E-mail/i);
    const message = screen.getByLabelText(/Mensagem/i);
    const btn = screen.getByRole('button', { name: /Enviar Mensagem/i });

    await user.type(name, 'Maria Silva');
    await user.type(email, 'maria@example.com');
    await user.type(message, 'Olá, preciso de ajuda.');

    await user.click(btn);

    expect(submitted).not.toBeNull();
    expect(submitted).toMatchObject({
      name: 'Maria Silva',
      email: 'maria@example.com',
      message: 'Olá, preciso de ajuda.',
    });
  });
});
