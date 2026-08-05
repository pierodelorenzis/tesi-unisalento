import {createContext, useState} from 'react';

const GlobalContext = createContext(undefined);
export const GlobalProvider = ({children}) => {
    const [displayMode, setDisplayMode] = useState('highCarbon');

    return (
        <GlobalContext.Provider value={{displayMode, setDisplayMode}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
