import styled from 'styled-components';
import {mobile, landscapeTablets} from '../responsive';
//mui
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//redux
import { useDispatch } from 'react-redux';
import {removeItem} from '../redux/slices/cartSlice';

const Product = styled.div` 
    position: relative;
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div` 
    flex: 2;
    display: flex;
`
const Image = styled.img` 
    width: 200px;
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
    
`
const ProductColor = styled.div` 
    flex: 3;
`
const ProductSize = styled.span` 
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

const CartItem = ({item}) => {
   const dispatch = useDispatch();

   const {id, title, img, size, price, count} = item;
   return (
         <> 
           <Product>
               <ProductDetail>
                   <Image src={img}/>
                   <Details>
                       <ProductName><b>Product:</b>{title}</ProductName>
                       <ProductId><b>ID:</b> {id}</ProductId>
                       <ProductColor color="black"/>
                       <ProductSize><b>Size:</b> {size}</ProductSize>
                   </Details>
               </ProductDetail>
               <PriceDetail>
                   <ProductAmountContainer>
                       <RemoveIcon/>
                       <ProductAmount>{count}</ProductAmount>
                       <AddIcon/>
                   </ProductAmountContainer>
                   <ProductPrice>$ {price}</ProductPrice>
               </PriceDetail>
               <ProductDelete>
                   <ClearIcon onClick={() => dispatch(removeItem(item))}/>
               </ProductDelete>
           </Product>
           <Hr/>
       </>
    )
} 

export default CartItem;