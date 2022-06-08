import react,{useState, useEffect} from 'react';


const defaultSettings = {
    objetivosCorporativosSelecionados : [],
    objetivosTiSelecionados : []
}




export const ObjetivosContext = react.createContext();



export function ObjetivosProvider ({children}) {

    const [objetivosContext,setObjetivosContext] = useState(defaultSettings);

    return (
        <ObjetivosContext.Provider value={[objetivosContext,setObjetivosContext]} >
              {children}
        </ObjetivosContext.Provider>
    )


}