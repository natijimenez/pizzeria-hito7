import { createContext, useContext, useState } from 'react'

const UserContext = createContext()


// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true)

  const logout = () => {
    setToken(false)
  }

  return (
    <UserContext.Provider value={{ token, setToken, logout }}>
      {children}
    </UserContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext)