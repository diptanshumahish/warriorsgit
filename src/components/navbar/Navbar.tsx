'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 right-0 left-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <Image src="/finallogo.svg" height={32} width={32} alt='logo' />
            <span className="font-bold">Warriors GIT LLC</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <NavLinks />
          </nav>
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLinks mobile />
          </div>
        </div>
      )}
    </header>
  )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = `${
    mobile ? 'block' : ''
  } text-sm font-medium hover:text-green-400 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700`

  return (
    <>
      <Link className={linkClass} href="/#services">
        Services
      </Link>
      <Link className={linkClass} href="/#technologies">
        Technologies
      </Link>
      <Link className={linkClass} href="/#about">
        About
      </Link>
      <Link className={linkClass} href="/contact">
        Contact
      </Link>
    </>
  )
}