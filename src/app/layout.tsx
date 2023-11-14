import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Triangle North Flying Club',
  description: 'Flying club at KLHZ for those who love to fly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <div id='page-container' className='sm:px-4'>
          <NavBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
