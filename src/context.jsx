import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();


export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [searchTerm, setSearchTerm] = useState('dog')
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
        localStorage.setItem('darkTheme', newDarkTheme)
    }
    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme)
    }, [isDarkTheme])

    return (
        <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}>   
        {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => useContext(AppContext);