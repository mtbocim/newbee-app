import type { Metadata } from 'next'
import {  Mooli } from 'next/font/google'
import '@/app/styles/globals.css'
import NavBar from './components/NavBar'

const moogliFont = Mooli({
  weight: '400',
  subsets: [ 'latin' ],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={moogliFont.className}>
        <NavBar />
        <div className="flex justify-center items-center h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}


