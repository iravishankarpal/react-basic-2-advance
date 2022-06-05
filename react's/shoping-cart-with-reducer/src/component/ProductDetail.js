import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
// import axios from "axios";
import "./style.css";

import styled from "styled-components";
import { CartStore } from "./Context-Reducer/Context";
import CheckToCart from "./CheckToCart";

const ProductDetailRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: whitesmoke;
`;

function ProductDetail() {
  const {detail} = useContext(CartStore);

  
  const ProductDetail = detail[0]

  console.log('ProductDetail :', ProductDetail);

  return (
    <div className="ProductDeatilsContainer row ">
      <div className="col-md-5 PriductDeatilImg ">
        <img src={ProductDetail.image} alt="ProductDetailImg" />
      </div>
      <div className="col-md-5 productDetailBody">
        <h1 className="ProdcutTitle">
          {ProductDetail.title}
          <br />
          <FaRupeeSign /> {ProductDetail.price}
        </h1>

        <div></div>
        <h4>{ProductDetail.category}</h4>
        <p>{ProductDetail.description}</p>

        <h3 className="productDetailPrice">
          <ProductDetailRating>
            <CheckToCart Prod ={ProductDetail}/>
          </ProductDetailRating>
        </h3>
      </div>
    </div>
  );
}

export default ProductDetail;
