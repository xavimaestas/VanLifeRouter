import { useOutletContext } from "react-router-dom"

export default function Details(){

   const {van} = useOutletContext()


    return (
        

        <div className="">
           <h1>{van.name}</h1>
        </div>
        
       
      
    )
}