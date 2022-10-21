import BuyButton from "./BuyButton";
import styled from 'styled-components';
import './GunDetailsCard.css';

const FlexContainer = styled.div`
  maxWidth: 80%; 
  border: 1px solid black; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const EnlargingOnHoverImage = styled.img`
  width: 200px;
  height: 200px;
  transition: transform .2s; /* Animation */
  
  &:hover {
    transform: scale(1.2);
  }
`


function GunDetailsCard({url, name, price}) {
    return (
        <FlexContainer>
            <div>
                <EnlargingOnHoverImage src={url}/>
            </div>
            <div style={{marginLeft: '20px'}}>
              <p>Name: {name}</p>
              <p>Price: {price}</p>
              <BuyButton/>
            </div>
        </FlexContainer>
    );
}

export default GunDetailsCard;
