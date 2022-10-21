import GunDetailsCard from "./GunDetailsCard";
import Navbar from "./Navbar";
import {useState} from "react";

function Gunshop() {

    const [shoppingBasket, setShoppingBasket] = useState([]);

    let addItem = (item) => {
        setShoppingBasket(shoppingBasket => {
            shoppingBasket.push(item)
            return shoppingBasket
        })
        console.log(shoppingBasket)
    }

    return (
    <div style={{margin: "20px 20px 0px 20px"}}>
      <Navbar/>
      <h1>Welcome to the gunshop!</h1>
      <GunDetailsCard buyHandler={addItem} name="AK-47" price={1000} url={"/gunshop/img/ak-47.png"}/>
      <GunDetailsCard buyHandler={addItem} name="M-16" price={10000} url={"/gunshop/img/m-16.png"}/>
    </div>
  );
}

export default Gunshop;
