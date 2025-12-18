"use client"

import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, var(--footer-gradient-start), var(--footer-gradient-end));
  padding: var(--space-2) var(--space-3);
  border-top: 1px solid var(--color-gray-20);
  margin-top: auto;
  width: 100%;
  transition: background 0.3s ease;

  @media (min-width: 768px) {
    padding: var(--space-2) var(--space-3);
  }

  @media (min-width: 1024px) {
    padding: 0 calc(10 * var(--space-unit));
  }
`

const ContentWrapper = styled.div`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-2) 0;

  @media (min-width: 768px) {
    gap: var(--space-3);
  }
`

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-3);
  }
`

const LogoWithSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: var(--space-1);
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
  gap: var(--space-2);
  margin-left: var(--space-1);
`

const SocialLink = styled(Link)`
  display: inline-flex;
  padding: var(--space-1);
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
  gap: var(--space-3);

  @media (min-width: 768px) {
    gap: var(--space-4);
    justify-content: flex-end;
  }
`



const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  align-items: center;
  border-top: 1px solid var(--color-gray-20);
  padding-top: var(--space-4);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const Copyright = styled.div`
  text-align: center;
  color: var(--color-gray-80);
  font-size: 0.875rem;
  line-height: var(--lh-text);

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