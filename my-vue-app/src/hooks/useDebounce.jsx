import { useEffect, useState } from 'react'

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handleTime = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handleTime)
    }
  }, [value])
  return debouncedValue
}