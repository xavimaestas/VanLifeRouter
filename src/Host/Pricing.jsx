import { useOutletContext } from "react-router-dom"

export default function Pricing(){


    const {van} = useOutletContext()
    return (
        <>

        <div className="">
           <h1>{van.name}</h1>
        </div>
        
        </>
      
    )
}