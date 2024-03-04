import { createContext, useContext, useState, useEffect } from 'react';

const VisibilityContext = createContext();

export const useVisibility = () => useContext(VisibilityContext);

export const VisibilityProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => setIsVisible(!isVisible);
  
    const [actions, setActions] = useState({
        filtrar: null,
        reset: null,
        pintarAvances: null,
    });

    const registerActions = (newActions) => {
        setActions(prevActions => ({ ...prevActions, ...newActions }));
    };

    const invokeAction = (actionName) => {
        if (actions[actionName]) {
            actions[actionName]();
        } else {
            console.warn(`Action "${actionName}" not registered.`);
        }
    };
    useEffect(() => {
        const handleToggle = () => {
            toggleVisibility();
        };

        window.addEventListener('toggleTabVisibility', handleToggle);

        return () => {
            window.removeEventListener('toggleTabVisibility', handleToggle);
        };
    }, [toggleVisibility]);

    return (
        <VisibilityContext.Provider value={{ isVisible, toggleVisibility, registerActions, invokeAction }}>
            {children}
        </VisibilityContext.Provider>
    );
};
