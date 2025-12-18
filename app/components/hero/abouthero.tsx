"use client"

import Image from "next/image";
import styled from "styled-components";

const HeroSection = styled.section`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: 0 var(--space-4);

  /* allow certain instances to reverse order on mobile (image below text) */
  &.reverseOnMobile {
    flex-direction: column-reverse;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    &.reverseOnMobile {
      flex-direction: row;
    }
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
  margin-top: var(--space-2);
  color: var(--color-gray-60);

  & + & {
    margin-top: calc(1.5 * var(--space-unit));
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16rem; /* h-64 */
  border-radius: 0.75rem;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 20rem; /* h-80 */
    flex: 1;
  }
`

const StyledImage = styled(Image)`
  display: block;
  border-radius: 0.75rem;
  overflow: hidden;

  & span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: inherit;
  }
`

const CardsSection = styled.section`
  max-width: 80rem; /* max-w-7xl */
  margin: calc(10 * var(--space-unit)) auto var(--space-8); /* mt-20 mb-16 */
  padding: 0 var(--space-4);
  display: block;
  gap: var(--space-3);

  @media (min-width: 768px) {
    margin-top: calc(15 * var(--space-unit)); /* mt-30 */
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

const Card = styled.article`
  width: 100%;
  background-color: var(--color-gray-10);
  border-radius: 0.75rem;
  padding: var(--space-3);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
  border: 1px solid var(--color-gray-20);
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
  position: relative;

  
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
    flex: none;
  }
`

const CardsInner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: var(--space-3);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    gap: var(--space-4);
  }
`

const CardsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`

const AsideImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.75rem;
  overflow: hidden;
  align-self: stretch;
  background: var(--color-gray-10);
  min-height: 18rem;

  @media (min-width: 768px) {
    width: 44%;
    flex: none;
    /* allow the container to stretch to match the cards' height */
  }
`

const CardTitle = styled.h3`
  font-size: var(--text-headline-sm);
  font-weight: 700;
  color: var(--color-emerald-70);
  margin-bottom: var(--space-1);
`

const CardText = styled.p`
  font-size: var(--text-text-base);
  color: var(--color-gray-60);
  line-height: var(--lh-text);
`

const BottomSpacer = styled.div`
  height: var(--space-6);

  @media (min-width: 768px) {
    height: calc(16 * var(--space-unit));
  }
`

const MidSpacer = styled.div`
  height: var(--space-4);

  @media (min-width: 768px) {
    height: var(--space-8);
  }
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
            src="/sobre-main.jpg"
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
        <CardsInner>
          <CardsColumn>
            <Card aria-label="Card Inclusão">
              <CardTitle>Inclusão</CardTitle>
              <CardText>
                Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+.
              </CardText>
            </Card>
            <Card aria-label="Card Acolhimento">
              <CardTitle>Acolhimento</CardTitle>
              <CardText>
                As pessoas profissionais da saúde entendem as necessidades da comunidade LGBTQIAPN+.
              </CardText>
            </Card>
            <Card aria-label="Card Segurança">
              <CardTitle>Segurança</CardTitle>
              <CardText>
                Protegemos seus dados e validamos pacientes e profissionais da saúde.
              </CardText>
            </Card>
          </CardsColumn>

          <AsideImageContainer aria-hidden="true">
              <StyledImage
                src="/sobre-right-1.jpg"
                alt="Imagem Nosso Compromisso"
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                priority
              />
          </AsideImageContainer>
        </CardsInner>
      </CardsSection>

      <MidSpacer aria-hidden="true" />

      {/* Nosso propósito */}
      <HeroSection className="reverseOnMobile" aria-label="Propósito Lacrei Saúde">
        <ImageContainer>
          <StyledImage
            src="/sobre-right-2.jpg"
            alt="Coração Pride"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </ImageContainer>

        <HeroContent>
          <HeroTitle>
            Propósito da Lacrei Saúde
          </HeroTitle>
            <HeroText>
            A Lacrei Saúde facilita a conexão entre pessoas da comunidade LGBTQIAPN+ mais que precisam de atendimento clínico a profissionais da saúde.
            Buscamos proporcionar um atendimento de qualidade, sustentado pelos pilares da inclusão, representatividade e segurança.
            </HeroText>
        </HeroContent>
      </HeroSection>

      <BottomSpacer aria-hidden="true" />

    </>

    
  )
}