import { createContext, useState } from "react"

export const AlertContext = createContext()
export const AlertProvider = ({children})=>{
  const [open,setOpen] = useState(false)
  const openHandler = ()=>{
    setOpen(true)
  }
return(
  <AlertContext.Provider value={{open,setOpen,openHandler}} >
      {children}
  </AlertContext.Provider>
)
}