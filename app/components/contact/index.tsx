"use client"

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-8) var(--space-4);
`

const InfoColumn = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
      gap: var(--space-3);
    align-items: center;
    text-align: center;
    order: 2;
    flex: 0 0 520px;
    max-width: 520px;
  }
`

const Title = styled.h1`
  font-size: var(--text-headline-sm);
  font-weight: 700;
  color: var(--color-emerald-70);

  @media (min-width: 768px) {
    font-size: var(--text-headline-lg);
  }
`

const Description = styled.p`
  font-size: var(--text-text-base);
  color: var(--color-gray-60);
  max-width: 28rem; /* max-w-md */
  line-height: var(--lh-text);
`

const SocialsContainer = styled.div`
  margin-top: var(--space-1);
`

const SocialsTitle = styled.h2`
  font-size: var(--text-headline-base);
  font-weight: 700;
  color: var(--color-emerald-70);
  margin-bottom: var(--space-2);
`

const SocialsList = styled.div`
  display: flex;
    gap: var(--space-2);
`

const SocialLink = styled(Link)`
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

const FormColumn = styled.div`
  width: 100%;
  max-width: 40rem;
  background-color: var(--color-gray-10);
    padding: var(--space-3);
  border-radius: 0.5rem;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  border: 1px solid var(--color-gray-20);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
      padding: var(--space-4);
    flex: 0 0 420px;
  }
`

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
    gap: var(--space-4);
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
      gap: var(--space-6);
  }
`

const StyledImg = styled.img`
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 520px;
  height: auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  display: block;
  font-size: var(--text-text-sm);
  font-weight: 700;
  color: var(--color-gray-70);
  margin-bottom: var(--space-1);
`

const Input = styled.input`
  width: 100%;
  padding: calc(1.5 * var(--space-unit));
  border-radius: 0.375rem;
  border: 1px solid var(--color-gray-30);
  color: var(--color-gray-70);
  background-color: var(--color-gray-20);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;

  &::placeholder { color: var(--color-gray-50); opacity: 1; }

  &:focus {
    border-color: var(--color-emerald-50);
    box-shadow: 0 0 0 3px rgba(1, 135, 98, 0.12);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: calc(1.5 * var(--space-unit));
  border-radius: 0.375rem;
  border: 1px solid var(--color-gray-30);
  color: var(--color-gray-70);
  background-color: var(--color-gray-20);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  resize: none;

  &::placeholder { color: var(--color-gray-50); opacity: 1; }

  &:focus {
    border-color: var(--color-emerald-50);
    box-shadow: 0 0 0 3px rgba(1, 135, 98, 0.12);
  }
`

const SubmitButton = styled.button`
  margin-top: var(--space-1);
  background-color: var(--color-emerald-60);
  color: white;
  font-weight: 700;
    padding: calc(1.5 * var(--space-unit)) calc(3 * var(--space-unit));
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  width: 100%;

  &:hover {
    background-color: var(--color-emerald-70);
  }

  &:focus-visible { box-shadow: 0 0 0 4px rgba(1,135,98,0.14); outline: none; }
`

export default function ContactSection() {
  return (
    <Section aria-label="Entre em contato">
      <Title style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
        Entre em contato
      </Title>
      <ContentRow>
        <FormColumn>
          <Form>
          <FormGroup>
            <Label htmlFor="name">
              Nome Completo
            </Label>
            <Input 
              type="text" 
              id="name" 
              placeholder="Digite seu nome"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">
              E-mail
            </Label>
            <Input 
              type="email" 
              id="email" 
              placeholder="seu@email.com"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">
              Mensagem
            </Label>
            <TextArea 
              id="message" 
              rows={4}
              placeholder="Como podemos ajudar?"
            ></TextArea>
          </FormGroup>

          <SubmitButton type="submit">
            Enviar Mensagem
          </SubmitButton>
          </Form>
        </FormColumn>

        <InfoColumn aria-hidden>
          <StyledImg src="/sobre-right-1.jpg" alt="Ilustração" />
        </InfoColumn>
      </ContentRow>
    </Section>
  )
}