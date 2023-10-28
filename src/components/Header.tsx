'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Icon } from '@mdi/react'
import { mdiMenu } from '@mdi/js'

const Header: FC = () => {
  const showDrawerHandler = () => {
    const navBarElement = document.getElementById('nav-bar')
    const backdropElement = document.getElementById('backdrop')

    navBarElement?.classList.remove('hidden')
    navBarElement?.classList.add('fixed')
    backdropElement?.classList.remove('hidden')
    backdropElement?.classList.add('fixed')

    setTimeout(() => {
      navBarElement?.classList.remove('-translate-x-full')
      backdropElement?.classList.remove('opacity-0')
      backdropElement?.classList.add('opacity-50')
    }, 10)
  }

  return (
    <header className='flex flex-row justify-between items-center max-w-5xl mb-2 py-2 mx-4 sm:flex-row-reverse sm:m-auto sm:px-4'>
      <button onClick={showDrawerHandler}>
        <Icon path={mdiMenu} size={2} className='sm:hidden' />
      </button>
      <Image
        src='/logo.jpeg'
        width={150}
        height={50}
        className='mix-blend-multiply'
        alt='Logo'
      />
    </header>
  )
}

export default Header
