import GunDetails from "./GunDetails";

function Gunshop() {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
      <h1>Welcome to the gunshop!</h1>
      <GunDetails name="AK-47" price={1000} url={"/img/gunshop/ak-47.png"}/>
      <GunDetails name="M-16" price={10000} url={"/img/gunshop/m-16.png"}/>
    </div>
  );
}

export default Gunshop;
