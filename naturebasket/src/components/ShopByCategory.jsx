import Carousel from "react-multi-carousel";
import "../styles/ShopByCategory.css";
import "react-multi-carousel/lib/styles.css"

    const categories = [
        {image :"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png", title : "Exotic  vegetables",l1 : "Asparagus Artichokes", l2 : "Avocados Peppers", l3 : "Broccoli Zucchini", l4 : "View" },
        {image :"https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png", title : "Meat Poultry & seafood",l1 : "Chicken Cuts Lollipops Mince", l2 : "Fish Other Seafood", l3 : "Fresh Kebabs Others", l4 : "View"},
        {image :"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png", title : "Fresh Artisanal Breads",l1 : "Breadsticks Crostinni Lavache", l2 : "Buns Croissants Bagels", l3 : "Muffins Cakes Brownies", l4 : "View"},
        {image :"https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png", title : "Daily Essentials",l1 : " Snacks & Beverages ", l2 : " Breakfast, Dairy & Bakery", l3 : " Staples", l4 : "View" },
        {image :"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png", title : "Organic ",l1 : "Fruits & Vegetables ", l2 : "Staples", l3 : "Bakery & Dairy", l4 : "View"},
        {image :"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Readytoeatweb.png", title : "Ready to Eat",l1 : "Hors'D Oeuvres", l2 : "Pastries Desserts", l3 : "Soups Salads", l4 : "View"},
        {image :"https://gnbdevcdn.s3.amazonaws.com/Images/Category/bespokeweb.png", title : "Bespoke Gifts",l1 : "Celebrations with Nature's Basket", l2 : "World Food Hampers", l3 : "Bulk Enquiry", l4 : "View"},
        {image :"https://gnbdevcdn.s3.amazonaws.com/Images/Category/fineteasweb.png", title : "Fine Teas",l1 : "Black Teas", l2 : "reen White Oolong Teas", l3 : "Herbal Teas Detox Benefit Blends", l4 : "View"},
    ]

export const ShopByCategory = ()=>{
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
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      return (
        <div className="slide-show">
          <p id="shopbycategory">SHOP BY CATEGORY</p>
          <div className="slider-box" style={{ position: "relative" }}>
            <Carousel responsive={responsive} className="slider-div">
              {categories.map((el)=>{
                  return <div >
                      <div>
                        <img src={el.image} />
                      </div>
                      <div>
                        <p id="title">{el.title}</p>
                        <ul id="headings">
                            <li>{el.l1}</li>
                            <li>{el.l2}</li>
                            <li>{el.l3}</li>
                        </ul>
                      </div>
                  </div>
              })}
            </Carousel>
          </div>
        </div>
      );
} 