"use client";

import React, { useEffect, useState } from "react";

type props = {
  price:number;
  id:number;
  options?:{ title: string; additionalPrice: number }[];
}

const Price = ({price, id, options}:props) => {

  const [total ,setTotal] = useState(price);
  const [Quantity ,setQuantity] = useState(1);
  const [selected ,setselected] = useState(0);


  useEffect(() => {
    setTotal(Quantity * (options ? price + options[selected].additionalPrice : price))
  },[Quantity, selected,options,price])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{total.toFixed(2)}</h2>
      {/* options container  */}

      <div className="flex gap-4">
        {options?.map((option,index) => (
          <button 
            key={option.title}
            className="p-2 ring-red-400 rounded-md min-w-[6rem]"
            style={{
              background: selected === index ? "rgb(248 113 113)":"white",
              color: selected === index ? "white" : "red"
            }}
            onClick={()=> setselected(index)}
          >{option.title}</button>
        ))}
      </div>

      {/* Quantity and add button container  */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity(prev=>(prev> 1 ? prev-1 : 1))}
            >
              {"<"}
            </button>
            <span>{Quantity}</span>
            <button
              onClick={() => setQuantity(prev=> (prev < 9 ? prev+1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        
        {/* CART BUTTON */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>


    </div>
  );
};

export default Price;
