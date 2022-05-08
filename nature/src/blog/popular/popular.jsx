import { populardata } from "./populardata";
import "./popular.css"

export const Popular = ()=>{
    return(
        <div >
            <p className="POPULARARTICLES">POPULAR ARTICLES </p>
            {populardata.map(e=>
            <div className="popular-flex-div">
                <div >
                   <img className="popular-img-div" src={e.img} alt="" /> 
                </div>
               <div className="popular-p-div"> {e.txt}<br/>{e.date}</div>
            </div>)}
        </div>
    )
}