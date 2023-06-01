import {NavLink, Link} from 'react-router-dom'

export default function Nav(){
    return (
        <>

        <div className="nav">
            <Link to="/"><span className="nav-span">#VANLIFE</span></Link>
            <div className="nav-nonhomeroutes">
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? "highlighted" : null}
                    >About
                </NavLink>
                <NavLink 
                    to="/vans"
                    className={({isActive}) => isActive ? "highlighted" : null}
                >Vans</NavLink>
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? "highlighted" : null}
                >Host</NavLink>
            </div>
        </div>
        
        </>
      
    )
}