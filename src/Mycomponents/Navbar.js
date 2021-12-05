import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {
    return (
        <>
        {/* justify-content-center issy exact center m ataa hai or jo neechy waly div m property use ki hai ussy */}
       
         <div className="navbarbg d-flex align-items-center ">

        {/* bg-transparent  */}
         
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navback pt-0">
  <div className="container-fluid">
    <Link className="navbar-brand text-white fw-bold fs-3" smooth to="#home">DarkPond Woods 
    <i className="fas fa-tree text-white ms-2"></i></Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white active" aria-current="page" smooth to="#home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" smooth to="#about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" smooth to="#services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" smooth to="#gallary">Gallary</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" smooth to="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
         {/* <div className="ms-5 p-5 divmov">
         <p className="lead text-white display-5">DarkPond Woods</p>
         <p className="lead w-50 text-white intro">forest is a system which is composed of plants, animals and microorganisms. 
             Forest as Habitat: Forest is the habitat for a variety of living beings.
             Many plants, animals and microbes live in the forest.The branches of a tree make its crown.area of land dominated
              by trees. Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, 
              tree height, land use, legal standing, and ecological function. ... Forests are the predominant terrestrial
               ecosystem of Earth, and are
              distributed around the globe.</p>
              <button className="btn btn-outline-light rounded-pill px-4">Services</button>
              <button className="btn btn-outline-light rounded-pill px-4 ms-2">Gallary</button>

         </div> */}
         <div className="container ms-3">
             <div className="row">
                 <div className="col text-white display-5 mb-4">DarkPond Woods</div>
                 <div className="col-md-12">
                 <p className="lead text-white w-50 intro" >forest is a system which is composed of plants, animals and microorganisms. 
             Forest as Habitat: Forest is the habitat for a variety of living beings.
             Many plants, animals and microbes live in the forest.The branches of a tree make its crown.area of land dominated
              by trees. Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, 
              tree height, land use, legal standing, and ecological function. ... Forests are the predominant terrestrial
               ecosystem of Earth, and are
              distributed around the globe.</p>
                 </div>
               
               <Link className="btn btn-outline-light rounded-pill w-25 ms-2" smooth to="#services">Services</Link>
        
             <Link className="btn btn-outline-light rounded-pill ms-2 w-25" smooth to="#gallary">Gallary</Link>
             
              
             </div>
        
          
              
         </div>

           
        
           
        </div>
       
        </>
    )
}
