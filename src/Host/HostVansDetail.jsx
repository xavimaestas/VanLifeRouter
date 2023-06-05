import {useState, useEffect} from 'react'
import {Link, Outlet, useParams, NavLink} from 'react-router-dom'



export default function HostVansDetail(){

    const [van, setVan] = useState([])
    const [id, setId] = useState("")

    const params = useParams()


    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setVan(data.vans)
        })
    },[params.id])
    

    const vanElements =  van ? van.map((van)=> {
        return (
            
            <>


                <div className="host-van-detail" key={van.id}>

            
                        <img src={van.imageUrl}  alt="photo of the hosts van"/>
                        <div className="host-van-name-price">
                            <h6>{van.name}</h6>
                            <p>${van.price}/day</p>
                        </div>
                     
                </div>
            
            </>


                
       
            
        )
    }) : <p>Loading...</p>


  

    return (
  

        <div>

            <div>

            <Link
                to=".."
                relative="path"
                className="back-button"
                >&larr; <span>Back to all vans</span>
            </Link>

            </div>

           

            <div>

                {vanElements}


            </div>

            <nav>

                <NavLink 
                    to="."
                    path="relative"
                    end
                    className={({isActive}) => isActive ? ".." : null}
                    >Details
                </NavLink>
                <NavLink 
                    to="pricing"
                    className={({isActive}) => isActive ? "host-highlighted" : null}
                    >Pricing
                </NavLink>
                <NavLink 
                    to="photos"
                    className={({isActive}) => isActive ? "host-highlighted" : null}
                    >Photos
                </NavLink>


            </nav>

            <Outlet context={{van}}/>
        </div>


      
    )
}