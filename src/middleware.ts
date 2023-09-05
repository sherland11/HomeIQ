import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export const config = {
    matcher: '/home',
  }

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url))
}
 
