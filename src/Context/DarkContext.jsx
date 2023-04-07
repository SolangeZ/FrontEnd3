import React, { createContext, useState } from 'react'

export const DarkContext = createContext({});

const DarkModeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleMode = () => {
    if (isDarkMode) {
        setIsDarkMode(false)
    } else{
        setIsDarkMode(true)
    }
};

    const State = {
    isDarkMode,
    handleMode
    };

    return (
    <DarkContext.Provider value={State}>
        {children}
    </DarkContext.Provider>
    )
    }

    export default DarkModeContextProvider 