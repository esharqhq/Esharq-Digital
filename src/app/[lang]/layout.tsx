import type { Metadata } from 'next'
import '../globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Preloader } from '@/components/layout/Preloader'
import SmoothScrollProvider from '@/providers/SmoothScrollProvider'
import { getDictionary } from '@/lib/getDictionary'
import type { Language } from '@/lib/dictionaries'

export const metadata: Metadata = {
  title: 'Esharq IT Agency — Future Accelerated by AI',
  description: 'AI-Powered Solutions: 3x Faster. High-end digital agency in Tashkent.',
  keywords: ['AI', 'IT Agency', 'Web Development', 'Digital Solutions', 'Tashkent'],
}

export default async function RootLayout({ 
  children,
  params
}: { 
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Language);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <Preloader />
        <SmoothScrollProvider>
          <Navbar dict={dict.nav} lang={lang} />
          {children}
          <Footer dict={dict.footer} />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
