import { createContext, useState } from "react";
import { toast } from "react-toastify";

 export const Mystore  =    createContext()

 export let ContextPriver = ({children})=>{

        
  const [FormData, setFormData] = useState([])

  const deleteFunc  = (id)=>{
       let res  =  FormData.filter((ele)=> ele.id !== id)
       setFormData(res)
       toast.error('Task Delete')


  }
        return <Mystore.Provider value={{FormData, setFormData, deleteFunc}}>
                {children}
        </Mystore.Provider>
}


