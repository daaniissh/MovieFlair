import { createContext, useContext, useState } from "react"

export const AlertContext = createContext()
export const AlertProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <AlertContext.Provider value={{ open, setOpen }} >
      {children}
    </AlertContext.Provider>
  )
}

export const useOpen = () => {
  return useContext(AlertContext)
}