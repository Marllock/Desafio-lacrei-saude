"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { ThemeToggle } from "./ThemeToggle"

const HeaderContainer = styled.header`
  position: relative;
  background: linear-gradient(to bottom, var(--header-gradient-start), var(--header-gradient-end));
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  transition: background 0.3s ease;

  @media (min-width: 768px) {
    padding: 2rem 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 7.5rem;
  }
`

const MobileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`

const NavDesktop = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`

const NavLink = styled(Link)`
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  color: var(--color-gray-80);
  font-size: var(--text-text-xl);
  transition: background-color 100ms;

  &:hover {
    background-color: var(--color-green-20);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-green-60);
  }
`

const MobileMenuButton = styled.button`
  display: block;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: transparent;
  border: none;
  color: var(--color-gray-80);
  transition: background-color 150ms;

  @media (min-width: 768px) {
    display: none;
  }

  &:hover {
    background-color: var(--color-green-20);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(0,0,0,0.12);
  }
`

const MobileNav = styled.nav<{ $isOpen: boolean }>`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background-color: var(--color-gray-10);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-top: 1px solid var(--color-gray-20);
  overflow: hidden;
  transition: all 300ms ease-out;
  
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-0.5rem)")};
  max-height: ${({ $isOpen }) => ($isOpen ? "24rem" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNavContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
`

const MobileNavLink = styled(Link)`
  display: inline-flex;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: var(--color-emerald-70);

  &:hover {
    background-color: var(--color-emerald-10); /* emerald-50 was likely a typo in original, using lighter shade */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-emerald-60);
  }
`

const Divider = styled.span`
  display: block;
  height: 1px;
  background-color: var(--color-gray-20);
`

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <HeaderContainer aria-label="Cabeçalho principal" role="banner">
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Image
          src="/logo-header.svg"
          alt="Logo da Lacrei Saúde"
          width={250}
          height={52}
          priority
        />
      </Link>

      {/* Ações Mobile: tema sempre visível + menu */}
      <MobileActions>
        <ThemeToggle />
        <MobileMenuButton
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {/* Inline SVG to respect theme colors */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden
            style={{ display: 'block' }}
          >
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </MobileMenuButton>
      </MobileActions>

      {/* Navegação Desktop */}
      <NavDesktop role="navigation" aria-label="Menu Principal (Desktop)">
        <NavLink href="/sobre">Quem somos</NavLink>
        <NavLink href="/contato">Contato</NavLink>
        <ThemeToggle />
      </NavDesktop>

      {/* Dropdown Mobile */}
      <MobileNav
        id="mobile-nav"
        role="navigation"
        aria-label="Menu principal (Mobile)"
        $isOpen={isMenuOpen}
      >
        <MobileNavContent>
          <MobileNavLink href="/sobre" onClick={() => setIsMenuOpen(false)}>Quem somos</MobileNavLink>
          <Divider />
          <MobileNavLink href="/contato" onClick={() => setIsMenuOpen(false)}>Contato</MobileNavLink>
        </MobileNavContent>
      </MobileNav>
    </HeaderContainer>
  )
}