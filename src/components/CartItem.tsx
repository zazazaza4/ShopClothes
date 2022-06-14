import {FC} from 'react';

import styled from 'styled-components';
import {portraitTablets, landscapeTablets} from '../responsive';
//mui
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//redux
import { useDispatch } from 'react-redux';
import { CartItem as CartItemProps } from '../redux/slices/cart/types';
import {removeItem, plusItem, minusItem} from '../redux/slices/cart/cartSlice';

const Product = styled.div` 
    position: relative;
    display: flex;
    justify-content: space-between;
    ${landscapeTablets({flexDirection: 'column'})}
`
const ProductDetail = styled.div` 
    flex: 2;
    display: flex;
`
const Image = styled.img` 
    width: 200px;
    ${portraitTablets({width: '150px'})}
`
const Details = styled.div` 
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span` 
   
`
const ProductId = styled.span` 
    flex: 3;
    
`
const ProductSize = styled.div` 
    flex: 1;
    margin-top: 10px;
`
const ProductColor = styled.span` 
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const PriceDetail = styled.div` 
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${landscapeTablets({flexDirection: 'row',justifyContent: 'space-around'})}
`
const ProductAmountContainer = styled.div` 
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    svg {
        cursor: pointer;
        &:hover {
            color: grey;
        } 
    }
    ${landscapeTablets({marginBottom: '0px', width: '2em'})}
`
const ProductAmount = styled.div` 
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div` 
    font-size: 24px;
    font-weight: 200;
`
const Hr = styled.hr`
    border: none;
    height: 1px;
    background-color: #eee;
    margin-bottom: 10px;
`
const ProductDelete = styled.div` 
    position: absolute;
    top: 0;
    left: 90%;
    svg {
        cursor: pointer;
        &:hover {
            color: grey;
        } 
    }
`

const CartItem:FC<CartItemProps> = ({id, title, img, size, price, count, color}) => {
   const dispatch = useDispatch();

   return (
         <> 
           <Product>
               <ProductDetail>
                   <Image src={img}/>
                   <Details>
                       <ProductName><b>Product:</b> {title}</ProductName>
                       <ProductId><b>ID:</b> {id}</ProductId>
                       <ProductColor color={color}/>
                       <ProductSize><b>Size:</b> {size}</ProductSize>
                   </Details>
               </ProductDetail>
               <PriceDetail>
                   <ProductAmountContainer>
                       <RemoveIcon onClick={() => dispatch(minusItem({id, count}))}/>
                       <ProductAmount>{count}</ProductAmount>
                       <AddIcon onClick={() => dispatch(plusItem({id}))}/>
                   </ProductAmountContainer>
                   <ProductPrice>$ {price * count}</ProductPrice>
               </PriceDetail>
               <ProductDelete>
                   <ClearIcon onClick={() => dispatch(removeItem({id}))}/>
               </ProductDelete>
           </Product>
           <Hr/>
       </>
    )
} 

export default CartItem;