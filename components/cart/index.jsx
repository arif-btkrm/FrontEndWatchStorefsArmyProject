import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../shared/buttons";
import {
  BackButtonContainer,
  CartContainer,
  InfoContainer,
} from "./CartComponents";
import CartInfo from "./CartInfo";
import CartPrising from "./CartPrising";
import CheckoutForm from "./checkout";
import { cartItemsVar, extraCost } from '../../apolloClient/index';
import { useReactiveVar, useQuery } from '@apollo/client';
import { getExtraCost } from '../../graphql/index';


const CartBody = () => {

  const { data } =  useQuery(getExtraCost)
  const forextraCost = data?.extraCost
  extraCost({ 
    vat : forextraCost ? forextraCost?.vat : 5,
    shipingCost : forextraCost ? forextraCost?.shipingCost : 20,
  })
  
  const [checkout, setCheckout] = useState(false);
  const cartData = useReactiveVar(cartItemsVar)
  const {vat  , shipingCost} = useReactiveVar(extraCost)
  
  const subTotal =  cartData.reduce((acc , cu)=>{
     acc += (cu.product_quantity * cu.price)
    return acc
  },0)

  const quantityHandler = (action, index) => {
    if(action == "+"){
      cartData[index].product_quantity = cartData[index].product_quantity  + 1 
    }else if(action == "-" &&  cartData[index].product_quantity > 1 ) {
      cartData[index].product_quantity =  cartData[index].product_quantity  - 1 
    }
    cartItemsVar([...cartData])

  };

  const removeItemHandler = (index) => {
    cartData.splice(index , 1)
    cartItemsVar([...cartData])
  };

  return (
    <>
      <CartContainer>
        <InfoContainer>
        {/* <CheckoutForm /> */}

           <CartInfo
              cartData={cartData}
              quantityHandler={quantityHandler}
              removeItemHandler={removeItemHandler}
            /> 
    
          <CartPrising
            subTotal={subTotal}
            vatRate={vat}
            checkout={checkout}
            setCheckout={setCheckout}
          />
        </InfoContainer>
      </CartContainer>
      <BackButtonContainer>
        <Link href="/">
          <Button bg="primary" fontSize={"md"}>
            Back To Store
          </Button>
        </Link>
      </BackButtonContainer>
    </>
  );
};

export default CartBody;
