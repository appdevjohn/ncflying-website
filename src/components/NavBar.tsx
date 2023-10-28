'use client'

import { FC } from 'react'
import Link from 'next/link'

const NavBar: FC = () => {
  const hideDrawerHandler = () => {
    const navBarElement = document.getElementById('nav-bar')
    const backdropElement = document.getElementById('backdrop')

    navBarElement?.classList.add('-translate-x-full')
    backdropElement?.classList.remove('opacity-50')
    backdropElement?.classList.add('opacity-0')

    setTimeout(() => {
      navBarElement?.classList.remove('fixed')
      navBarElement?.classList.add('hidden')
      backdropElement?.classList.remove('fixed')
      backdropElement?.classList.add('hidden')
    }, 150)
  }

  return (
    <>
      <nav
        id='nav-bar'
        className={
          'hidden top-0 bottom-0 left-0 w-9/12 bg-white dark:bg-slate-900 z-20 p-8 pt-12 shadow-lg transition-transform -translate-x-full sm:block sm:block sm:translate-x-0 sm:shadow-none sm:p-0'
        }
      >
        <ul>
          <li className='nav-link'>
            <Link href='/' onClick={hideDrawerHandler}>
              About
            </Link>
          </li>
          <li className='nav-link'>
            <Link href='/fleet' onClick={hideDrawerHandler}>
              Fleet
            </Link>
          </li>
          <li className='nav-link'>
            <Link href='/membership-info' onClick={hideDrawerHandler}>
              Membership Info
            </Link>
          </li>
          <li className='nav-link'>
            <Link href='/faq' onClick={hideDrawerHandler}>
              FAQs
            </Link>
          </li>
          <li className='nav-link'>
            <Link
              href='https://docs.google.com/forms/d/e/1FAIpQLSftCCKYJED0uNI2wM0yBJ-Y49xrT1dnoe_lIId8dNFtaD5L6w/viewform?usp=sf_link'
              target='_blank'
            >
              Apply to Join
            </Link>
          </li>
        </ul>
      </nav>
      <div
        id='backdrop'
        className={
          'hidden top-0 right-0 bottom-0 left-0 bg-black opacity-0 z-10 transition-opacity sm:hidden'
        }
        onClick={hideDrawerHandler}
      ></div>
    </>
  )
}

export default NavBar
