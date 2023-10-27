import { FC } from 'react'
import Image from 'next/image'

const Header: FC = () => (
  <header className='flex flex-row justify-between items-center max-w-5xl m-auto mb-4 py-4'>
    <Image
      src='/logo.jpeg'
      width={150}
      height={50}
      className='mix-blend-multiply'
      alt='Logo'
    />
    <div className='inline-block w-80'></div>
  </header>
)

export default Header
