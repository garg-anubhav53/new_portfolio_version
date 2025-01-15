import { Plus_Jakarta_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { GradientBackground } from './components/gradient-background'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(plusJakarta.className, "min-h-screen bg-[#112240]")}>
        <GradientBackground />
        {children}
      </body>
    </html>
  )
}
