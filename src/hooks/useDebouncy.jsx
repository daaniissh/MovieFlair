import React, { useEffect } from 'react'

export const useDebounce = (incomingFunction, dependency) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      incomingFunction()
    },300)
    return () => {
      clearInterval(timer)
    }
  }, [...dependency])

}

