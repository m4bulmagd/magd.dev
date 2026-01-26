'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { track } from '@vercel/analytics'

export default function RefTracker() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = searchParams.get('ref')

    if (ref){
        if (!sessionStorage.getItem('tracked_ref')) {
            track('external_ref', { ref })
            sessionStorage.setItem('tracked_ref', ref)
        }
        
        // remove ref from url and Preserve other query params if any exist
        const params = new URLSearchParams(searchParams.toString())
        params.delete('ref')
        const newUrl = params.toString() ? `/?${params}` : '/'
        window.history.replaceState({}, '', newUrl)
    }
  }, [searchParams])

  return null
}
