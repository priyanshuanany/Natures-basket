import "../styles/Navbar.css"
import { Link } from "react-router-dom"

export const Header = ()=>{
    return(
        <div className="nav-main-box">
            <nav id="navbar-box">
                <div id="logo-img">
                    <img src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2" alt="logo"/>
                </div>
                <div id="search-box">
                    <div id="nav-title">
                        <div><p>online slote Availability</p></div>
                        <div><p>Fresh and Fast</p></div>
                        <div><p>Store Locator</p></div>
                        <div><p>Contact Us</p></div>
                        <div id="location">
                            <select id="" defaultValue="Mumbai">
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi NCR">Delhi NCR</option>
                                <option value="Pune">Pune</option>
                                <option value="Bengaluru">Bengaluru</option>
                                <option value="Thane">Thane</option>
                                <option value="Navi Mumbai">Navi Mumbai</option>
                                <option value="Kolkata">Kolkata</option>
                            </select>
                                </div>
                    </div>
                    <div id="serach-div">
                        <input type="text" placeholder="start shoping..." id="search-input" />
                    </div>
                </div>
                <div id="login-reg">
                        <div><Link to="/login">Login</Link></div>
                        <div><Link to="/register">Register</Link></div>
                    </div>
            </nav>
            

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
  


<li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle megacolor" to={"/"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BLOG
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"/blog"}>EVERYTHING FOOD</Link></li>
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

        </div>
    )
}