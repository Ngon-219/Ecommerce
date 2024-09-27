import React, { useContext, useEffect, useState } from "react";
import {ShopContext} from '../Context/ShopContext';
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/product/${productId}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(Object.values(data)[0])
            setProduct(Object.values(data));
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])
    return (
        <div>
            <Breadcrum product={product[0].name}/>
            <ProductDisplay product={product[0]}/> 
            <DescriptionBox />
        </div>
    );
}

export default Product;