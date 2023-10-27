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
        <div
          className='grid max-w-5xl m-auto'
          style={{ gridTemplateColumns: '12rem 1fr' }}
        >
          <NavBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
