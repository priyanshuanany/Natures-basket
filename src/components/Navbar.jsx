// import React from 'react'
import { Link} from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {
    // const nav =[
    //     {title:"HOME", to:"/"},
    //     {title:"ABOUT", to:"/About"},
    //     {title:"User", to:"/User"},
    // ];
  return (
    <div style={{margin:"0",
    TextAlign:"center",
    border:"1px solid gray",
    borderRadius:"3px"}} >
        {/* {nav.map((e)=>(
            <Link to={e.to} style={{margin:"50px"}}>{e.title}</Link>
        ))
            
      } */}
      <ul className="nav nav-tabs-round">

      <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={"/"} role="button" aria-expanded="false" style={{color:"#CD5C5C"}}>SHOP BY CATEGORY</Link>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item " to={"/"}>Wine Beer</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/"}>Gift Hampers</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/"}>Fruits Vegetables</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/"}>Cheese Meat Fruit Platters </Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/"}>Delicatessen Cheese</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/"}>International Cuisine</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/"}>Health</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/"}>Indian Grocery</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/"}>Confectionary Patisserie</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/"}>Meats Seafood And Eggs</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/"}>Snack Bar</Link></li>

      
    </ul>
  </li>



  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Home"}>PAST PURCHASES</Link>
  </li>
  
  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Home"}>GIFTING</Link>
  </li>
  
  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Home"}>REWARDS</Link>
  </li>
  
  {/* <li className="nav-item">
    <Link className="nav-link" aria-current="page" to={"/Home"}>BLOG</Link>
  </li> */}


{/* blog  start*/}

<li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle megacolor" to={"/"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BLOG
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"/"}>Action</Link></li>
            <li><Link className="dropdown-item" to={"/"}>Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to={"/"}>Something else here</Link></li>
          </ul>
        </li>
{/* blog  end*/}





  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Home"}>OFFERS</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Home"}>CONNOISSEUR'S SELECTION</Link>

  </li>
  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Home"}>BOOK STORE VISIT</Link>
  </li>
 
  </ul>
    </div>
  );
}
