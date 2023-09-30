
import React, { createContext, useEffect, useState } from 'react'
export const ActivePageContext= createContext();
const ActivePageProvider = ({children}) => {
    
    const [active,setActive]= useState("Produce")
    return(
        <ActivePageContext.Provider value={{active,setActive}}>
            {children}
        </ActivePageContext.Provider>
    )


}

export default ActivePageProvider