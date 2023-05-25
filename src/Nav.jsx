import {Link} from 'react-router-dom'

export default function Nav(){
    return (
        <>

        <div className="nav">
            <Link to="/"><span className="nav-span">#VANLIFE</span></Link>
            <div className="nav-nonhomeroutes">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </div>
        
        </>
      
    )
}