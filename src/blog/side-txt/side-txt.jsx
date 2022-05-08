import { Side_txt } from "./side-txtdata"
import "./sidetxt.css"

export const Side_txt_bar = ()=>{
    return(
        <div className="sidetxt-p">
            <p className="cat-p">Categories</p>
            {Side_txt.map(e=><p>{e.txt}</p>)}
            <p className="video-p">POPULAR RECIPES: 🥗 </p>
            <iframe id="video-9437-1_youtube_iframe" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/9CBRpN2rTzQ?controls=0&rel=0&disablekb=1…lse&enablejsapi=1&origin=https%3A%2F%2Fblog.naturesbasket.co.in&widgetid=1" width="338.325" height="190.30781249999998"></iframe>
        </div>
    )
}