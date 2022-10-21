import BuyButton from "./BuyButton";

function GunDetails(props) {
    return (
        <div style={{maxWidth:'80%', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div>
                <img src={props.url} style={{width: '200px', height: '200px'}}/>
            </div>
            <div style={{marginLeft: '20px'}}>
              <p>Name: {props.name}</p>
              <p>Price: {props.price}</p>
              <BuyButton/>
            </div>
        </div>
    );
}

export default GunDetails;
