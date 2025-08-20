import { createContext, useContext, useState, useEffect } from "react";

export const SavedWebLinksStateContext = createContext({
    webLinks: [
        {
            id: 1,
            websiteName: 'Google',
            websiteLink: 'https://www.google.com',
        }
    ],

    addNewWebLink: (websiteName, websiteLink) =>{},
    deleteWebLink: (id)=>{}
});

export function SavedWebLinksStateContextProvider({children}){
    // Concered Values & Functions
    const [webLinks, setWebLinks] = useState([]);
  
    const addNewWebLink = (websiteName, websiteLink)=>{
        // For Id:
        let now = new Date()
        let id = `WEB_LINK_${now.getDate()}/${now.getMonth()}/${now.getFullYear()}/${now.getHours()}/${now.getMinutes()}/${now.getSeconds()}/${now.getMilliseconds()}` // (DD/MM/YY/T_H/T_M/T_S/T_M)
        
        setWebLinks(prev => [
            ...prev, 
            {
                id: id, 
                websiteName: websiteName, 
                websiteLink: websiteLink
            }
        ])
    }
    const deleteWebLink = (id)=>{
        setWebLinks(prev => prev.filter((item)=>{
            if (item.id != id) 
                return item;
        }))
    }
  
    // [Saving & Loading WebShortcut Links From {Browser's Local Storage}]
    useEffect(()=>{
        // [Loading WebShortcuts]
        const saved_web_links = JSON.parse(localStorage.getItem('WEBSHORTCUTS'))
        if (saved_web_links && (saved_web_links.length > 0)) {
            setWebLinks(saved_web_links)
        }
    },[])

    useEffect(()=>{
        // [Saving Webshortcuts]
        localStorage.setItem('WEBSHORTCUTS', JSON.stringify(webLinks))
    },[webLinks])

    
    const value = {
        webLinks, 
        addNewWebLink, 
        deleteWebLink
    };

    return <SavedWebLinksStateContext.Provider value={value}>
        {children}
    </SavedWebLinksStateContext.Provider>
}

export function useSavedWebLinksStateContext(){
    return useContext(SavedWebLinksStateContext);
}
