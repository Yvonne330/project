"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MyCard from "./components/productcard";
import { Input, Typography, Spin } from "antd";

export default function Page() {
  var [products, setProducts] = useState([]);
  var [loading, setLoading] = useState(true);

  function handleMap(arrayItem) {
    return <MyCard product={arrayItem} key={arrayItem.id} />;
  }

  useEffect(handleWork, []);

  function handleWork() {
    handleBackground();
  }

  async function handleBackground() {
    var res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    setLoading(false);
  }

  return (
    <div>
      <Typography.Title className="text-center">
        My Shopping Site
      </Typography.Title>
      <div className="text-center">
        <Input placeholder="Search" className="text-center w-3/4" />
      </div>
      {loading ? (
        <div className="text-center">
          <Spin />
        </div>
      ) : (
        <div className="sm:flex flex-wrap justify-center">
          {products.map(handleMap)}
        </div>
      )}
    </div>
  );
}
