import '../styles/globals.css'
import '../styles/waves.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anubhav Garg - Portfolio',
  description: 'Full Stack Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-navy-900 text-light-blue-100">
        {children}
      </body>
    </html>
  )
}
