import GunDetails from "./GunDetails";
import Navbar from "./Navbar";

function Gunshop() {
  return (
    <div style={{margin: "20px 20px 0px 20px"}}>
      <Navbar/>
      <h1>Welcome to the gunshop!</h1>
      <GunDetails name="AK-47" price={1000} url={"/gunshop/img/ak-47.png"}/>
      <GunDetails name="M-16" price={10000} url={"/gunshop/img/m-16.png"}/>
    </div>
  );
}

export default Gunshop;
