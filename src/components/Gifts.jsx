import { Data } from "./Data"
import "./Gift.css"
import styled from "styled-components";
import cart from "../images/cart.png"
import { useState } from "react";
export const Gifts = () => {
    const Address = styled.div`
      text-align:center
    `
    const Pinkbtn = styled.button`
    background-color:#b71453;
    width:83%;
    color:white;
    border:0;
    margin:auto;
    `
    const [data,setData] = useState(Data)
    // console.log(data);
    const handleSort = () => {
        const select = document.querySelector("#select").value;
        if(select=='low'){
            data.sort(function(a,b){
                return +(a.mrp)- +(b.mrp)
            })
            setData(data)
            // console.log(data);
        }
        else if(select=="high"){
            data.sort(function(a,b){
                return +(b.mrp)- +(a.mrp)
            })
            setData(data)
            // console.log(data);
        }
       
    }

    const handleCheck1 = () => {
        let value = document.getElementById("assorted")
       if(value.checked==true){
            if(value.value=="asorted"){
                data.filter((el) => {
                    return el.title==="E-Gift Voucher"
                })
                setData(data)
            }
            
            console.log(data);
       }
    }
   
    const handleCheck2 = () => {
        let value = document.getElementById("nature-basket")
       if(value.checked==true){
        if(value.value=="nature-basket"){
            data.filter((el) => {
                return el.title!="E-Gift Voucher"
            })
              setData(data)
        }
      
        console.log(data);
       };
    }
    return <div className="container">
        <div className="filter_div">
            <div>
              <h5> FILTER</h5> 
              <p className="clear">CLEAR ALL</p>
            </div>
            <hr />
            <div>
                
            <h4>Gift Hampers</h4>
             <p>E-Gift Voucher</p>
             <p>All Hampers</p>
            </div>
             <hr />
             <div>
             <h4>Brands</h4>
             <p> <input type="checkbox" id="assorted" value="assort" onChange={handleCheck1}/><span>Assorted</span></p>
            <p> <input type="checkbox" id="nature-basket" value="nature" onChange={handleCheck2}/><span>Natures Basket</span></p>
             </div>
            <Address >
                <h5>CONTACT US FOR CUSTOMIZED GIFTING SOLUTIONS</h5>
                <select name="" id="" >
                    <option value="">Mr</option>
                    <option value="">Mrs</option>
                </select><span><input type="text" placeholder="First Name" style={{ width:"118px"}}/></span>*
                <input type="text" placeholder="Last Name"/>*
                <input type="text" placeholder="Email Id"/>*
                <input type="number" placeholder="Mobile No"/>*
                <select name="" id="" style={{width:"83%"}}>
                    <option value="">Mumbai</option>
                    <option value="">Pune</option>
                    <option value="">Bangalore</option>
                    <option value="">Karnataka</option>
                </select>*
                <input type="text" placeholder="Area Of Delivery"/>*
                <textarea name="" id="" cols="21" rows="4" placeholder="Enquiry"></textarea>
                <Pinkbtn>Submit</Pinkbtn>
                <div style={{fontSize:"10px",width:"83%",margin:"auto",textAlign:"left"}}>
                    <input type="checkbox" checked/><span>I agree to receive gifting inquiry call from Natures Basket.</span>
                </div>
               
            </Address>
            <Pinkbtn style={{width:"100%",fontSize:"10px",padding:"3px"}}>DOWNLOAD GIFTING CATALOGUE</Pinkbtn>
        </div>
        
        <div>
            <div>
                <p>Home &gt; Gift Hampers</p>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                 <div> <h3>GIFT HAMPERS &nbsp; <span style={{fontWeight:"normal",color:"grey"}}>83 products</span></h3> 
                 </div>
              <div>
                  <select name="" id="select" onChange={handleSort}>
                      <option>Relevance</option>
                      <option value="low">Low to High Price</option>
                      <option value="high">High to Low Price</option>
                  </select>
              </div>
              </div>
              <hr />
              <p>Explore <span><hr /></span></p>
                
              
               
              
            </div>
            <div className="Gift_div">
        {data.map((el) =>  
          <div className="gift">
         
              <img src={el.img} alt="" style={{height:"200px",width:"200px",borderRadius:"8px"}}/>
               <p style={{fontFamily:"CeraPRO-Light, CeraPRO-Regular",fontSize:"10px",textAlign:"center"}}>{el.delivery}</p>
              <div className="title">{el.title}</div>
              <span style={{border:"1px solid grey",textAlign:"center",marginLeft:"80px",paddingLeft:"10px",paddingRight:"10px"}}>1 Pc</span>
              <div style={{display:"flex",gap:"10px",marginLeft:"27px",textAlign:"center",marginTop:"10px"}}>
                  <div className="mrp">MRP ₹{el.mrp}</div>
                  <button style={{backgroundColor:"#92be4d",border:"none",borderRadius:"3px",padding:"7px"}}><img src={cart} alt="" style={{height:"15px",width:"15px"}}/> add</button>
              </div>
              
              
          </div>
       )}
        </div>
        </div>
        
        
    </div>
}
