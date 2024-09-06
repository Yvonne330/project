"use client";
import { Button, Card, Image, Typography, message } from "antd";
import { useState } from "react";

export default function MyCard({ product }) {
  var [click, setClick] = useState(false);
  var [count, setCount] = useState(1);
  var[copy, setCopy] = useState()
  
  function handleDecrement() {
    
    // count <= 1 ? setCount(1) : setCount(count - 1);

    if (count <=1) {
      setCount(1);
     setClick(false)
    } else {
      setCount(count -1)
      
    }
  }

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleButton() {
    setClick(true);
  }
  function handleCopy(){
    var newValue = counter + 1
    setCounter(newValue)
  }

  return (
    <Card title={product.title} className="sm:w-1/4 m-5">
      <Image src={product.image} height={300}  />
      <div className="flex justify-between items-center">
        <Typography.Title>${product.price}</Typography.Title>

        {click ? (
          <div className="flex">
            <Button size="small" onClick={handleDecrement}>
              -
            </Button>
            <span className="px-2 border">{count}</span>
            <Button size="small" onClick={handleIncrement}>
              +
            </Button>
          </div>
        ) : (
          <Button type="primary" onClick={handleButton}>
            Buy Now
          </Button>
        
        )}
      </div>
    </Card>
  );
}
