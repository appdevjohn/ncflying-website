import { FC } from 'react'
import Link from 'next/link'

const NavBar: FC = () => {
  return (
    <nav>
      <ul>
        <li className='nav-link'>
          <Link href='/'>About</Link>
        </li>
        <li className='nav-link'>
          <Link href='/fleet'>Fleet</Link>
        </li>
        <li className='nav-link'>
          <Link href='/membership-info'>Membership Info</Link>
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
  )
}

export default NavBar
