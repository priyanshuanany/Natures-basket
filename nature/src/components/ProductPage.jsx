import { useEffect, useState } from "react"
import "../styles/ProductPage.css"
import { Header } from "./header";

export const ProductPage = ()=>{
    const [datas,setDatas] = useState([]);
    const getproduct = async () => {
        try {
          let P_data = await fetch(
            `https://littlebluepenguin.s3.ap-south-1.amazonaws.com/data/breakfastAndInstantFood/all.json`
          );
          let data = await P_data.json();
          console.log(data);
          setDatas(data);
        } catch (err) {
          console.log(err);
        }
      };
    useEffect(()=>{
        getproduct();
    },[])
    return (
        <>
        <Header/>
        <div className="product-page">   
                  
            <div className="product-img">
              {datas.map((el,index)=>{
                  return <div>
                      <div id="img-div">
                      <img id="pro-img" src={el.img} alt={index} />
                      <p id="tagline">DELEIVERY IN 90 MINUTES</p>
                      <p id="product-name">{el.productName}</p>
                      </div>
                      <div id="btn">
                          <div id="price">
                              {el.price}
                          </div>
                          <div>
                              <button>ADD</button>
                          </div>
                      </div>
                  </div>
              })}
            </div>
            <div>

            </div>
        </div>
        </>
    )
}