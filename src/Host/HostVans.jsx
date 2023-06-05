import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HostVans(){
    const [vans, setVans] = useState([])
    const [id, setId] = useState("")
    


    useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => {
            setVans(data.vans)
            setId(data.vans.hostId)
            console.log(data.vans)
        })
    },[])

    const vanElements =  vans ? vans.map((van)=> {
        return (

            <div className="host-van-tile-container" key={van.id}>
                    <Link className="host-van-content"  to={`/host/vans/${van.id}`}>
                        <img src={van.imageUrl} className="host-van-img" alt="photo of the hosts van"/>
                        <div className="host-van-name-price">
                            <h6>{van.name}</h6>
                            <p>${van.price}/day</p>
                        </div>
                    </Link>
            </div>
         
       
            
        )
    }) : <p>Loading...</p>


    return (
        <>

        <div className="page">
           <h1>{vanElements}</h1>
        </div>
        
        </>
      
    )
}