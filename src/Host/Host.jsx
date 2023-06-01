import {Link, Outlet} from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function Host(){

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

                <div className="host-van-content" key={van.id}>
                    <img src={van.imageUrl} className="host-van-img" alt="photo of the hosts van"/>
                    <div className="host-van-name-price">
                        <h6>{van.name}</h6>
                        <p>${van.price}/day</p>
                    </div>

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