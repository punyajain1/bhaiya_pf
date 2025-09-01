import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'Ujjwal Jain - Portfolio',
  description: 'Portfolio website showcasing my work and experience',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/ujjwal.jpg',
    shortcut: '/ujjwal.jpg',
    apple: '/punya.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-typewriter antialiased bg-white dark:bg-[#0d1117] text-black dark:text-[#f0f6fc] min-h-screen transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
