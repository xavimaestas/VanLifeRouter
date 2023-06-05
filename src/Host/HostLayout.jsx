import {NavLink, Outlet} from 'react-router-dom'

export default function HostLayout(){
    return (
        <>

        <div className="host">
            <NavLink 
                to="."
                end
                className={({isActive}) => isActive ? "host-highlighted" : null}
                >Dashboard
            </NavLink>
            <NavLink 
                to="income"
                className={({isActive}) => isActive ? "host-highlighted" : null}
                >Income
            </NavLink>
            <NavLink 
                to="vans"
                className={({isActive}) => isActive ? "host-highlighted" : null}
                >Vans
                </NavLink>
            <NavLink 
                to="reviews"
                className={({isActive}) => isActive ? "host-highlighted" : null}
                >Reviews
            </NavLink>
        </div>
            <Outlet />
        </>
      
    )
}