import React, { useContext, useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { CartStore } from "./Context-Reducer/Context";
import { FaRupeeSign, FaStar } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import CheckToCart from "./CheckToCart";
function CartDetail() {
  
  const {detail, setDetail} = useContext(CartStore);
  
  const [AllProduct, setAllProduct] = useState([]);

  const FetchProductDeatil = async function () {
    await axios
      .get(`https://fakestoreapi.com/products/`)
      .catch((err) => console.log(err, "fetching product details error"))
      .then((data) => setAllProduct(data.data));
  };

  useEffect(() => {
    if (AllProduct.length===0) {
      FetchProductDeatil();
    } else {
        
    }

  },[AllProduct]);
  if (AllProduct.length===0) {
    return(
      <div className="loading">
          ....loading
      </div>
    )
  } else {
    
    return (
      <div className="cartDetailContainer">
        {AllProduct.map((Prod) => {
          return (
            <Card
              className="m-1 border-light "
              style={{ height: "auto" }}
              key={Prod.id}
              onClick={()=>{
                if (detail.length===0){
                  (setDetail([Prod]))
                 }
                  else{
                   while(detail.length > 0) {
                     detail.pop();
                 }
                 setDetail([Prod])
               }
              //  console.log('detail :', detail);
                   
                 
               }}
            >
              <Link className="Link" to={`/PorductDetail/`} >
                <Card.Img
                  className="p-2"
                  style={{ height: "18rem" }}
                  src={Prod.image}
                />
                <Card.Body>
                  <h3>
                    {" "}
                    <FaRupeeSign /> {Prod.price}
                  </h3>
                  <Card.Title>{Prod.title}</Card.Title>
  
                  <Card.Text>
                    <span className="card-desc">
                      {Prod.category}
                      <br />
                      <Badge className="prod-rating mx-2" bg="success">
                        <FaStar></FaStar> {Prod.rating.rate}
                      </Badge>
                      <span className="prod-units">({Prod.rating.count})</span>
                    </span>
                  </Card.Text>
                </Card.Body>
              </Link>
             <CheckToCart Prod={Prod}/>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default CartDetail;
