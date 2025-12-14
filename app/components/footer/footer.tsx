"use client"

import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, var(--footer-gradient-start), var(--footer-gradient-end));
  padding: 2rem 1.5rem;
  border-top: 1px solid var(--color-gray-20);
  margin-top: auto;
  width: 100%;
  transition: background 0.3s ease;

  @media (min-width: 768px) {
    padding: 2rem 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0rem 7.5rem;
  }
`

const ContentWrapper = styled.div`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
  }
`

const LogoWithSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: 1rem;
`

const SocialLink = styled(Link)`
  display: inline-flex;
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: var(--color-gray-80);
  transition: background-color 100ms;
  
  &:hover {
    background-color: var(--color-green-20);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-emerald-30);
  }
`

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    gap: 2rem;
    justify-content: flex-end;
  }
`

const FooterNavLink = styled(Link)`
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  color: var(--color-gray-80);
  font-size: var(--text-text-xl);
  transition: background-color 100ms;
  white-space: nowrap;

  &:hover {
    background-color: var(--color-green-20);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-emerald-30);
  }
`

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  border-top: 1px solid var(--color-gray-20);
  padding-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const Copyright = styled.div`
  text-align: center;
  color: var(--color-gray-80);
  font-size: var(--text-text-base);
  line-height: 1.5;

  @media (min-width: 768px) {
    text-align: center;
  }
`

export default function Footer() {
  return (
    <FooterContainer aria-label="Rodapé" role="contentinfo">
      <ContentWrapper>
        {/* Logo + Socials (grouped) | Nav */}
        <TopSection>
          <LogoWithSocials>
            <Logo href="/">
              <Image
                src="/logo.png"
                alt="Logo da Lacrei Saúde"
                width={50}
                height={50}
                priority={false}
              />
            </Logo>

            <SocialLinks aria-label="Redes sociais">
              <SocialLink
                href="https://www.facebook.com/lacrei.saude/"
                aria-label="Facebook da Lacrei Saúde"
              >
                <Image src="/logo-facebook.svg" alt="" width={24} height={24} aria-hidden />
              </SocialLink>

              <SocialLink
                href="https://www.instagram.com/lacreisaude/"
                aria-label="Instagram da Lacrei Saúde"
              >
                <Image src="/logo-instagram.svg" alt="" width={24} height={24} aria-hidden />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/company/lacreisaude/?originalSubdomain=br"
                aria-label="LinkedIn da Lacrei Saúde"
              >
                <Image src="/logo-linkedin.svg" alt="" width={24} height={24} aria-hidden />
              </SocialLink>
            </SocialLinks>
          </LogoWithSocials>

          <FooterNav aria-label="Links principais do rodapé">
            <FooterNavLink href="/sobre">Sobre Nós</FooterNavLink>
            <FooterNavLink href="/contato">Contato</FooterNavLink>
          </FooterNav>
        </TopSection>

        {/* Copyright */}
        <BottomSection>
          <Copyright>
            © {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65
          </Copyright>
        </BottomSection>
      </ContentWrapper>
    </FooterContainer>
  )
}