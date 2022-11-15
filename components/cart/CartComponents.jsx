import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% auto;
  width: 90%;
  background-color: ${({ bg, theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};
  min-height: 500px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5%;
  margin: 0 auto;
`;

export const BackButtonContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

export const CartInfoWrap = styled.div`
  flex: 3;
  padding: 2%;
  background-color: ${({ theme }) => theme?.color?.white};
`;

export const Hader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const CartTitle = styled.h3`
  color: ${({ theme }) => theme?.color?.text};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
`;
export const CartItemCount = styled.h3`
  color: ${({ theme }) => theme?.color?.text};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
`;

export const ItemTitle = styled.div`
  color: ${({ theme }) => theme?.color?.primary};
  font-weight: bold;
  /* display: flex; */
  display: grid;
  grid-template-columns: 45% 25% 12% 13% 5%;
  text-align: center;
`;
export const ProductDetailTitle = styled.span`
  /* margin: 10px 80px; */
`;
export const ProductQuantityTitle = styled.span`
  /* margin: 10px;
  margin-left: 95px; */
`;
export const ProductPriceTitle = styled.span`
  /* margin: 10px 60px;
  margin-right: 0px; */
`;
export const ProductTotalTitle = styled.span`
  /* margin: 10px 45px; */
`;

export const CartItemList = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;
export const ClearAllContainer = styled.div`
  text-align: center;
`;
export const ClearAllButton = styled.button`
  border: 2px red solid;
  font-size: 2rem;
  color: ${({ theme }) => theme?.color?.red};
  border-radius: 10px;
  padding: 10px;
  opacity: calc() 0.5;
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme?.color?.white};
    background-color: ${({ theme }) => theme?.color?.red};
  }
`;

export const CartItemContainer = styled.div`
  /* display: flex;
  align-items: center; */
  justify-content: space-between;
  padding: 3px 5px;
  display: grid;
  grid-template-columns: 45% 25% 12% 13% 5%;
  align-items: center;
  text-align: center;
`;

export const ProdInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ProdImage = styled.div`
  height: 70px;
  width: 70px;
  background-color: ${({ bg, theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};
`;

export const ProdDetails = styled.div`
  width: 200px;
  display: flex;
  text-align: left;
  flex-direction: column;
  margin: 5px;
`;

export const ProdQty = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AmountText = styled.h3``;

export const DeletItem = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  /* color: ${({ theme }) => theme?.color?.text}; */
  color: ${({ theme }) => theme?.color?.red};
  font-size: 25px;
  transition: 0.5s;
  opacity: 0.5;
  /* font-weight: bold; */
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const CartPrisingContainer = styled.div`
  flex: 1;
  padding: 2%;
  background-color: #f6f6f6;
  text-align: center;
`;

export const PrisingTitle = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme?.color?.text};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TagName = styled.span`
  margin: 3px 0;
`;

export const CheckOutBtn = styled.div`
  margin-top: 20px;
`;