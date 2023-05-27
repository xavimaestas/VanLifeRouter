import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'


export default function VanDetail(){
    const params = useParams()
    const [van, setVan] = useState(null)
    
    

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
},[params.id])

    return (
        <div className="detail-main-container">
           {van ? (<div className="detail-main">
            <img className ="detail-img" src={van.imageUrl}/>
            <p>{van.type}</p>
            <h2>{van.name}</h2>
            <h4>{van.price}</h4>
            <p>{van.description}</p>
            <Link></Link>
           </div>
           ) : <h1>Loading</h1>}
        </div>
    )
  }