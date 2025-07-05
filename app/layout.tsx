import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Regal Chic Store',
  description: 'Regal Chic Store - Your Fashion Destination',
  generator: 'Stan-codes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
