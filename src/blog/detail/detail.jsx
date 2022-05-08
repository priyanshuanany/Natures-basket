import { Side_txt_bar } from "../side-txt/side-txt";
import { Side_txt } from "../side-txt/side-txtdata";
import { deataildata } from "./detaildata";
import "./detail.css"
import { Popular } from "../popular/popular";

export const Detail = ()=>{
    return(
        <>
        <p className="Category">Category: Healty Food</p>
        <div className="detail-flex">
            
            <div className="detail-grid-div">
            {deataildata.map(e=>
            <>  
            <div className="detail-style-div">
            <img className="detail-img" src={e.img}></img>
            
              <div className="detail-p-div">
               {e.txt}<br/>{e.date}
               </div> 
               </div> 
            </>)}
            </div>
           <div className="detail-side-txt-div"><Popular></Popular><Side_txt_bar></Side_txt_bar></div> 
        </div>
        </>
    )
}