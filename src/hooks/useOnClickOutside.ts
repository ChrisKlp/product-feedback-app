import { useEffect } from 'react'

export default function useOnClickOutside(
  refs: Array<React.RefObject<HTMLElement | undefined>>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      let isElementClicked = false

      refs.forEach((ref) => {
        if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
          isElementClicked = true
        }
      })

      if (!isElementClicked) {
        handler()
      }
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [refs, handler])
}
