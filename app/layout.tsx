import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Brutestrapper Manifesto - Redefining Startup Grit',
  description: 'Discover the Brutestrapper Manifesto, a rallying cry for startups and entrepreneurs who embrace the grind with grit, creativity, and relentless determination. This is bootstrapping redefined - with brute force.',
  keywords: 'Brutestrapper, Startup Manifesto, Entrepreneurship, Startup Grit, Bootstrapping, Business, Success, Innovation'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
