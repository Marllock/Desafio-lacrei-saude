"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: var(--space-8) var(--space-4);

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    padding: var(--space-8) calc(10 * var(--space-unit));
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 32rem; /* max-w-lg */

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`

const Title = styled.h2`
  color: var(--color-gray-80);
  font-size: var(--text-headline-base);
  font-weight: 700;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: var(--text-headline-xl);
    text-align: left;
  }
`

const Divider = styled.span`
  display: block;
  width: 100%;
  height: 0.125rem; /* h-0.5 */
  background-color: var(--color-emerald-70);

  @media (min-width: 1024px) {
    width: 40%; /* w-2/5 */
  }
`

const Description = styled.p`
  color: var(--color-gray-70);
  font-size: var(--text-text-xl);
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: var(--text-headline-base);
  }
`

const ConhecaButton = styled(Link)`
  margin-top: var(--space-2);
  display: inline-block;
  border-radius: 0.375rem;
  background-color: var(--color-emerald-60);
  padding: calc(1.5 * var(--space-unit)) calc(3 * var(--space-unit));
  color: white;
  font-size: var(--text-text-xl);
  font-weight: 500;
  transition: background-color 100ms;
  border: none;

  &:hover {
    background-color: var(--color-emerald-70);
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-emerald-60);
  }
`

const StyledImage = styled(Image)`
  object-fit: cover;
`

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  border-radius: 1rem;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 16rem;

  @media (min-width: 1024px) {
    height: 20rem;
  }
`

const Slide = styled.div<{ $active?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 600ms ease;
  opacity: ${p => (p.$active ? 1 : 0)};
  z-index: ${p => (p.$active ? 2 : 1)};
  pointer-events: ${p => (p.$active ? 'auto' : 'none')};
`

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.45);
  color: #fff;
  border: none;
  padding: calc(1.2 * var(--space-unit)) calc(1.6 * var(--space-unit));
  min-width: var(--space-5);
  min-height: var(--space-5);
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);

  &:hover { background: rgba(0,0,0,0.55); }

  &[data-side="left"] { left: var(--space-1); }
  &[data-side="right"] { right: var(--space-1); }
`

const Dots = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: var(--space-1);
  display: flex;
  gap: var(--space-1);
`

const Dot = styled.button<{ $active?: boolean }>`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: 50%;
  background: ${props => (props.$active ? 'var(--color-emerald-60)' : 'rgba(255,255,255,0.6)')};
  border: none;
  padding: 0;
  cursor: pointer;
`

/* controls moved to image overlay (NavButton). Removed bottom control buttons. */

export default function HomeHero() {
  const images = [
    '/hero-image.jpg',
    '/sobre-hero-image.jpg',
    '/bg-home.jpg',
  ];

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReduced) return;
    const interval = setInterval(() => {
      if (!isHovering) setIndex(i => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  function prev() { setIndex(i => (i - 1 + images.length) % images.length); }
  function next() { setIndex(i => (i + 1) % images.length); }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <HeroSection aria-label="Seção Principal da Tela Inicial">
      <ContentWrapper>
        <Title>Conheça a Lacrei Saúde</Title>
        <Divider aria-hidden />
        <Description>Saiba mais sobre a Lacrei Saúde e conheça o nosso trabalho.</Description>
        <ConhecaButton href="/sobre">
          Conhecer
        </ConhecaButton>
      </ContentWrapper>

      <CarouselContainer onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <ImageWrapper>
          {images.map((src, i) => (
            <Slide key={src} $active={i === index} aria-hidden={i !== index}>
              <StyledImage
                src={src}
                alt={`Imagem ${i + 1}`}
                fill
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Slide>
          ))}

          <NavButton aria-label="Anterior" onClick={prev} data-side="left">‹</NavButton>
          <NavButton aria-label="Próximo" onClick={next} data-side="right">›</NavButton>

          <Dots aria-hidden={false}>
            {images.map((_, i) => (
              <Dot key={i} $active={i === index} aria-label={`Ir para imagem ${i + 1}`} onClick={() => setIndex(i)} />
            ))}
          </Dots>
        </ImageWrapper>

        
      </CarouselContainer>
    </HeroSection>
  );
}