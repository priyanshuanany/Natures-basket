import { Category } from "./category/category"
import { Side_txt_bar } from "./side-txt/side-txt"
import { Slider } from "./slider/slider"
import { Trend } from "./trend/trend"
import "./blog.css"
import Footer from "../components/Footer"
import { Header } from "../components/header"



export const Blog = ()=>{
  return(
    <div>
    <Header/>
    <Slider></Slider>
    <Category></Category>
    <p className='trend-head'>Trending Now</p>
    <div className='two-flex'>
      <div className='trend-flex'><Trend/></div>
      <div className='side-div' ><Side_txt_bar/></div>
      
    </div>
    <Footer/>
    </div>

    
  )
}