export const OurEvents = ()=>{
    const pics = [
        "https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg",
        "https://www.naturesbasket.co.in/Images/PhotoGallery/American-Food-Festival---Cheef-Saby-Vicky-Ratnani.jpg",
        "https://www.naturesbasket.co.in/Images/PhotoGallery/IndiaSportsHonours2019NaturesBasketGiftingGallary.jpg"
    ]
    return (
       <div className="events">
            <p id="events-head">OUR EVENTS</p>
            <div className="events-pic">
            {pics.map((el)=>{
                return (
                    <div>
                        <img src={el} />
                    </div>
                )
            })}
            </div>
       </div>
    )
}