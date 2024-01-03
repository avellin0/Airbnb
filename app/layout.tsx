import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar'

const font = Nunito({ subsets: ['latin'] }) /// importa uma fonte do google-fonts

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
} 

// esse Metadate é como aquele metada do HTML 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
