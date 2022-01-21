 import { createContext, useState } from "react"

 const AlertContext = createContext()

 function AlertProviderWrapper (props) {

    const [open, setOpen] = useState(false)
    const [alertInfo, setAlertInfo] = useState({description:'Well done!!'})

    return(
        <AlertContext.Provider value={{open, setOpen, alertInfo, setAlertInfo}}>
            {props.children}
        </AlertContext.Provider>

    )
 }

 export {AlertProviderWrapper, AlertContext}