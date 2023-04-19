import React from "react";

import "./product.scss";
import { Link } from "react-router-dom";
import ProductImg from '../../image/xôi.png'
const Product = (props) => {
    const {id, title, image01, price} = props.item;
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={ProductImg} alt="product-img" className="w-80" />
      </div>

      <div className="product__content">
        <h5>
          <Link to ={`/foods/${id}`} >{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">{price}.000đ</span>
          <button className="addTOCart__btn">
            Thêm Vào Giỏ Hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
