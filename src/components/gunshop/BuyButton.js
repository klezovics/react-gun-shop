function BuyButton({buyHandler, name, price}) {

    return (
        <button
            className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}
            onClick={() => {playCashRegisterSound(); buyHandler({name: name, price: price});}}
        >
            Buy
        </button>
    );
}

const audio = new Audio("/gunshop/sounds/cash-register.wav")
let playCashRegisterSound = () => { audio.play() }



export default BuyButton;
