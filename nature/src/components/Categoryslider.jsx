import Carousel from "react-multi-carousel";
import "../styles/ShopByCategory.css";
import "react-multi-carousel/lib/styles.css"


export const CategorySlider = ()=>{
    const image_url = [
         "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg",
         "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg",
         "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg",
         "https://d1z88p83zuviay.cloudfront.net/BannerImages/5658ebaa-f296-4121-991c-c2009109e764_1320x376.jpg"
    ]
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <div className="slide-show">
          <div className="slider-box" style={{ position: "relative" }}>
            <Carousel responsive={responsive} className="cat-div">
              {image_url.map((el)=>{
                  return <div>
                      <div>
                        <img src={el} />
                      </div>
                  </div>
              })}
            </Carousel>
          </div>
        </div>
      );
    
}