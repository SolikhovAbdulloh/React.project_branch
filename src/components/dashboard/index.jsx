import React from 'react'
import { Link, Links, Outlet } from 'react-router-dom'
import { dash_links } from '../../utils';
// import Catalog from '../catalog';
function Dashboard() {
  return (
    <div className="Katalog">
      <div className="Dashboard">
        <h1 className='catalog'>Каталог</h1>
      </div>
    {/* {dash_links.map((value) => 
       
    <Link to={value.path}><button>{value.title}</button></Link>
      
  )
    
    
      
    } */}
      <Outlet />
    </div>
  );
}

export default Dashboard