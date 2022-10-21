function BuyButton() {

    return (
        <button
            className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}
            onClick={playCashRegisterSound}
        >
            Buy
        </button>
    );
}

const audio = new Audio("/sounds/gunshop/cash-register.wav")
let playCashRegisterSound = () => { audio.play() }



export default BuyButton;
