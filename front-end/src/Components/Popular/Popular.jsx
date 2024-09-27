import React from "react";
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';
import { useState, useEffect } from "react";

const Popular = () => {
        const [data, setData] = useState([])

        const fetchData = async () => {
            const res = await fetch('http://localhost:3001/get-product');
            if(res.ok) {
                const json = await res.json();
                const arr = Object.values(json);
                setData(json);
                console.log(json);
            } else {
                throw new Error (`Response status: ${res.status}`);
            }
        }
    
        useEffect(() => {
            fetchData();
        }, [])
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data.map((item, i) => {
                    return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular;