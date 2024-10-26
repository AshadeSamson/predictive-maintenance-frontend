/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext } from "react"

const AuthContext = createContext()

export const userAuth = () => {
    return useContext(AuthContext)
}



function AuthContextProvider({ children }) {
   
  const currentUser = ".someuser"

  const options = {
    currentUser,
  }
  
  return (
      <AuthContext.Provider value={ options }>
        { children }
      </AuthContext.Provider>
  )
}

export default AuthContextProvider