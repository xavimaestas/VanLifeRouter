import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Vans(){

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    })




    const vanElements = vans.map((van) => (
       
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
            <img className="van-img" src={van.imageUrl}/>
            <div className="van-info-sort">
                <div className="title-btn">
                    <h4>{van.name}</h4>
                    <p>{van.type}</p>
                </div>
                <div className="price">
                    <p>${van.price}<br/>
                    /day</p>
                </div>
            </div>
            </Link>
        </div>
       
    ))

 


 

    return (
        <div className="vans-main">
            <div className="van-tile-container">
            {vanElements}
            </div>
        </div>
    )
  }