import { useEffect } from 'react'

export function usePageMetadata(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}
