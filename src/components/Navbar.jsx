// import React from 'react'
import { Link} from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {
  return (
    <div style={{margin:"0",
    TextAlign:"center",
    border:"1px solid gray",
    borderRadius:"3px"}} >
       
      <ul className="nav nav-tabs arr">

      <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={"/Shopbycategory"} role="button" aria-expanded="false" style={{color:"#CD5C5C"}}>SHOP BY CATEGORY</Link>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item " to={"/Winebeer"}>Wine Beer</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/Gifthapers"}>Gift Hampers</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/Fruitsvegetables"}>Fruits Vegetables</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/Cheesemeatfruitplatters"}>Cheese Meat Fruit Platters </Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/Delicatessencheese"}>Delicatessen Cheese</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/InternationalCuisine"}>International Cuisine</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/Health"}>Health</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/Indiangrocery"}>Indian Grocery</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/Confectionarypatisserie"}>Confectionary Patisserie</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/Meatsseafoodandeggs"}>Meats Seafood And Eggs</Link></li>
      <hr className="dropdown-divider"/>
      <li><Link className="dropdown-item" to={"/Snackbar"}>Snack Bar</Link></li>

      
    </ul>
  </li>



  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Pastpurchases"}>PAST PURCHASES</Link>
  </li>
  
  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Gifting"}>GIFTING</Link>
  </li>
  
  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Rewards"}>REWARDS</Link>
  </li>
  


<li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle megacolor" to={"/"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BLOG
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"/Everythingfood"}>EVERYTHING FOOD</Link></li>
            <li><Link className="dropdown-item" to={"/Recipe"}>RECIPE</Link></li>
            <li><Link className="dropdown-item" to={"/Newsletter"}>NEWSLETTER</Link></li>
          </ul>
        </li>






  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Offers"}>OFFERS</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link dropdown-toggle megacolor" to={"/"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    CONNOISSEUR'S SELECTION
          </Link>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"/Lexclusif"}>L'EXCLUSIF</Link></li>
            <li><Link className="dropdown-item" to={"/Healtyalternatives"}>HEALTHY ALTERNATIVES</Link></li>
            
       </ul>
  </li>
  <li className="nav-item">
    <Link className="nav-link megacolor" aria-current="page" to={"/Bookstorevisit"}>BOOK STORE VISIT</Link>
  </li>
 
  </ul>
    </div>




  );
}
