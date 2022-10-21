import BuyButton from "./BuyButton";

function GunDetails(props) {
    return (
        <div style={{border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div>
                <img src={props.url}/>
            </div>
            <div>
              <p>Name: {props.name}</p>
              <p>Price: {props.price}</p>
              <BuyButton/>
            </div>
        </div>
    );
}

export default GunDetails;
