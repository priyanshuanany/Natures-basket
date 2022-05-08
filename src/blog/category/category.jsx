import { CategoryData } from "./categorydata";
import "./category.css"
import { Link } from "react-router-dom";

export const Category = ()=>{
    // console.log(CategoryData)
    return(
       
            <div className="flex">
                {CategoryData.data.map(e=><div><Link to="/healty-food"><img className="flex-img" src={e.img}></img></Link><p className="txt-none">{e.txt}</p></div>)}
            </div>
        
    )
}