import { TrendData } from "./trenddata";
import "./trend.css"
export const Trend = ()=>{
    console.log(TrendData)
    return(
        <div className="trend-main"> 
            
            <div className="inside-flex">
            {TrendData.map(e=>
            <div className="grid" >
                <div>
                    <img className="trend-img" src={e.img}></img>
                </div>
                <div className="overlap">
                    <p>{e.title}</p>
                    <div className="desc-div"><p>{e.desc}</p></div>
                    <p>{e.date}</p>
                </div>

            </div>)}
            </div>
        </div>
    )
}