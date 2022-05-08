import { Sliderdata } from "./sliderdata"
import "./slider.css"
import { useEffect, useState } from "react"

export const Slider = ()=>{
  
   let [currentslide, setCurrentSlide] = useState(0)
   let slidelength = Sliderdata.length
   let intervaltime = 5000
let slideinterval;
  let autoscroll = true
   const nextslide = ()=>{
       setCurrentSlide(currentslide === slidelength -1 ? 0 : currentslide+1)
   }
   const prevslide = ()=>{
       setCurrentSlide(currentslide === slidelength -1 ? currentslide-1 : 1);
   }

   function auto (){
       slideinterval = setInterval(nextslide , intervaltime)
   }

   useEffect(()=>{
       if(autoscroll){
           auto()
       }
       return ()=>clearInterval(slideinterval)
   },[currentslide])
    // useEffect(()=>{
        // setInterval(function(){
        //     if(currentslide===4){
        //         currentslide=0
        //     }
        //     setCurrentSlide(currentslide+1)
        //     console.log(currentslide)
        // },3000)
    // },[])
   
   
    return(
       <div className="slider">
           <div className="trans">{Sliderdata.map((slide,index) =>{
               return (
                  <div className={index === currentslide ? "slide-current":"slide"} key={index}>
                      {index === currentslide && (
                          <>
                          <img className="slider-img" src={slide.img} alt="slide"></img>
                          <div className="content">
                              <div className="p-trans">
                              <p >{slide.txt}</p>
                              </div>
                              <div className="btn-div">
                              <button  className="left-btn">Know more</button>
                              </div>
                              
                          </div>
                          </>
                      )} </div>
               )
           })}
           </div>
       </div>
    )
}