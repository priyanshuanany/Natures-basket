import Carousel from "react-multi-carousel";
import "../styles/Productoffers.css"
import "react-multi-carousel/lib/styles.css"


export const ProductOffers = ({datas,index})=>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4
        }
      };
    return (
        <div className="slide-show">
            <p style={{"textAlign" : "center", "fontSize" : "22px"}}>{index===1 ? "TRENDING OFFERS" : index===2 ? "CURATED FOR YOU" : "DISCOVER MORE"}</p>
          <div className="slider-box" style={{ position: "relative" }}>
            <Carousel responsive={responsive} className="product-div">
              {datas.map((el)=>{ 
                     return <div >
                        <div style={{"display": "block",
                        "overflow":"hidden",
                        "color" :"grey"
                    }}>
                          <img src={el.img} style={{
                              "width":"289px",
                              "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"
                          }}/>
                        </div>
                        <div style={{"display": "block"}}>
                            <p style={{"fontSize" : "12px"}}>{el.tagline}</p>
                          <p>{el.title}</p>
                        </div>
                        <div id="btn">
                            <div>
                              <p>{el.mrp} {el.price}</p>
                            </div>
                            <div>
                                <button>ADD</button>
                            </div>
                        </div>
                      </div>
              })}
            </Carousel>
          </div>
        </div>
      );
}