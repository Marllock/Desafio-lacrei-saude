"use client"

import Image from "next/image";
import styled from "styled-components";

const HeroSection = styled.section`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

const HeroContent = styled.div`
  flex: 1;
`

const HeroTitle = styled.h1`
  font-size: var(--text-headline-sm);
  font-weight: 700;
  color: var(--color-emerald-70);
  text-align: center;

  @media (min-width: 768px) {
    font-size: var(--text-headline-lg);
    text-align: left;
  }
`

const HeroText = styled.p`
  font-size: var(--text-text-base);
  margin-top: 1rem;
  color: var(--color-gray-60);

  & + & {
    margin-top: 0.75rem;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16rem; /* h-64 */
  border-radius: 0.5rem;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 20rem; /* h-80 */
    flex: 1;
  }
`

const StyledImage = styled(Image)`
  object-fit: cover;
`

const CardsSection = styled.section`
  max-width: 80rem; /* max-w-7xl */
  margin: 5rem auto 4rem; /* mt-20 mb-16 */
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 7.5rem; /* mt-30 */
  }
`

const CardsSectionTitle = styled.h2`
  width: 100%;
  font-size: var(--text-headline-base);
  font-weight: 700;
  color: var(--color-emerald-70);
  text-align: center;
  margin-bottom: 1.5rem;
`

const Card = styled.div`
  width: 100%;
  background-color: var(--color-gray-10);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
  border: 1px solid var(--color-gray-20);
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
  position: relative;

  /* subtle emerald accent at the top */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--color-emerald-60), var(--color-green-50), var(--color-emerald-60));
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }

  /* Hover animation (motion-safe) */
  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: translateY(-2px) scale(1.01);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.06);
      border-color: var(--color-green-30);
    }

    &:hover::before {
      animation: accentShift 800ms ease-in-out forwards;
    }
  }

  @keyframes accentShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`

const CardTitle = styled.h2`
  font-size: var(--text-headline-sm);
  font-weight: 700;
  color: var(--color-emerald-70);
  margin-bottom: 0.5rem;
`

const CardText = styled.p`
  font-size: var(--text-text-base);
  color: var(--color-gray-60);
  line-height: 1.7;
`

export default function SobreHero() {
  return (
    <>
      {/* Hero da Seção Sobre */}
      <HeroSection aria-label="Sobre a Lacrei Saúde">
        <HeroContent>
          <HeroTitle>
            Sobre a Lacrei Saúde
          </HeroTitle>
            <HeroText>
            Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.
            Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+
            </HeroText>
          <HeroText>
            Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.
          </HeroText>
        </HeroContent>

        <ImageContainer>
          <StyledImage
            src="/sobre-right-2.jpg"
            alt="Coração Pride"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </ImageContainer>
      </HeroSection>
  
      {/* Seção Missão, Visão e Valores */}
      <CardsSection aria-label="">
      <CardsSectionTitle>Nosso Compromisso</CardsSectionTitle>
      <Card role="article" aria-label="Card Inclusão">
        <CardTitle>Inclusão</CardTitle>
        <CardText>
          Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+.
        </CardText>
      </Card>
      <Card role="article" aria-label="Card Acolhimento">
        <CardTitle>Acolhimento</CardTitle>
        <CardText>
          As pessoas profissionais da saúde entendem as necessidades da comunidade LGBTQIAPN+.
        </CardText>
      </Card>
        <Card role="article" aria-label="Card Segurança">
          <CardTitle>Segurança</CardTitle>
          <CardText>
            Protegemos seus dados e validamos pacientes e profissionais da saúde.
          </CardText>
        </Card>
      </CardsSection>
    </>
  )
}