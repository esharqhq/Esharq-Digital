import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'uz', 'ru']
let defaultLocale = 'en'

function getLocale(request: NextRequest) {
  const acceptLang = request.headers.get('accept-language')
  if (acceptLang) {
    const preferred = acceptLang.split(',')[0].split('-')[0]
    if (locales.includes(preferred)) {
      return preferred
    }
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|public|api|favicon.ico).*)',
  ],
}
