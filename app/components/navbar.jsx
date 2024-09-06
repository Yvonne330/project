"use client"
import { ShoppingCartOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import {CounterContext} from "../store/counter";
import {useContext} from "react"
export default function Navbar() {
   var { cartlist } = useContext(CounterContext);
  return (
    <FloatButton type="primary" icon={<ShoppingCartOutlined />} badge={{count:cartlist.length }} />
  ) 
}
