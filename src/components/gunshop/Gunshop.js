import GunDetails from "./GunDetails";

function Gunshop() {
  return (
    <div>
      <h1>Welcome to the gunshop!</h1>
      <GunDetails name="AK-47" price={1000} url={"/gunshop/img/ak-47.png"}/>
      <GunDetails name="M-16" price={10000} url={"/gunshop/img/m-16.png"}/>
    </div>
  );
}

export default Gunshop;
