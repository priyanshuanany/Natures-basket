import "../styles/Navbar.css"
import { CategorySlider } from "./Categoryslider"
import { HomepageSlider } from "./Homepageslider"
import { OurEvents } from "./OurEavnts"
import { ProductOffers } from "./ProductOffers"
import {datas} from "../Datas/Trendinoffers.js";
import { ShopByCategory } from "./ShopByCategory"
import { Curated } from "../Datas/CURATEDFORYOU"
import { discover } from "../Datas/DiscoverMore"
import { Header } from "./header"

import Footer from "./Footer"
// import { ProductPage } from "./ProductPage"

export const Navbar = ()=>{
    return (
      <div>
        {/* <div className="nav-main-box">
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
                        <div>Login</div>
                        <div>Register</div>
                    </div>
            </nav>
        </div> */}
        <Header/>
        <HomepageSlider />
        <ShopByCategory />
        <ProductOffers datas={datas} index={1}/>
        <ProductOffers datas={Curated} index={2}/>
        <CategorySlider />
        <ProductOffers datas={discover} index={3}/>
        <OurEvents />
        <Footer/>
      </div>
    )
}