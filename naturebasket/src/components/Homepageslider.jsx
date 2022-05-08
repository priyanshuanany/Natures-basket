// import { useEffect, useState } from "react"
import "../styles/HomepageSlider.css"
import { useEffect, useRef, useState } from "react";

export const HomepageSlider = ()=>{
    const image_url = [
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/82a1ea7f-02c2-4192-b0d7-588973fa8d14_1320x376.jpg",
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/4c720a91-f8f7-437a-bbfd-71e63580e802_1320x376.jpg",
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/29e5f6d0-7087-49d0-bd5a-dab151d860de_1320x376.jpg",
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/bc1eefce-0553-4b16-bc75-45a4ee42a22e_1320x376.jpg",
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/28b8913f-ae0e-4afe-ac72-bae62be8ffb2_1320x376.png",
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/172ece1d-70d5-44d5-a5f4-0d236c1d815a_1320x376.jpg",
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/5000cf77-bfbc-48fa-8523-3d1add750020_1320x376.jpg",
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg",
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/d923ad74-9f00-45a0-b19f-4af69eb07df6_1320x376.jpg",
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/5658ebaa-f296-4121-991c-c2009109e764_1320x376.jpg"
    ]

    const images = [
        "https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7",
        "https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png?v=9",
        "https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15"
    ]
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
      
    function resetTimeout() {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }
        }
      
        useEffect(() => {
          resetTimeout();
          timeoutRef.current = setTimeout(
            () =>
              setIndex((prevIndex) =>
                prevIndex === image_url.length - 1 ? 0 : prevIndex + 1
              ),
            5000
          );
      
          return () => {
            resetTimeout();
          };
        }, [index]);
      
        return (
        <div>
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {image_url.map((backgroundimage, index) => (
                <div
                  className="slide"
                  key={index}>
                    <img src={backgroundimage} alt="product" />
                </div>
              ))}
            </div>
      
            <div className="slideshowDots">
              {image_url.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="three-offers-pic">
              {images.map((el)=>{
                  return (
                      <div>
                          <img src={el} alt="offers" />
                      </div>
                  )
              })}
          </div>
        </div>
        );
      }