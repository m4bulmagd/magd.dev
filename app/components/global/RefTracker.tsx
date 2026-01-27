'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, any>) => void
    }
  }
}

export default function RefTracker() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = searchParams.get('ref')?.toLowerCase()
    if (ref){
      if (!sessionStorage.getItem('ref') && typeof window !== 'undefined' && window.umami) {
          window.umami.track('external_ref', {
            ref,
            page: window.location.pathname,
          })
          sessionStorage.setItem('ref', ref)
      }

      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [searchParams])

  return null
}
