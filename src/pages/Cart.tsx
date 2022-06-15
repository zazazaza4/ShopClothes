import { FC } from 'react';
//components
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty';
//style
import styled from 'styled-components';
//responsive
import {mobile, portraitTablets, laptops} from '../responsive';
//react router
import {useNavigate} from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cart/selector';
import { CartItem as CartItemType } from '../redux/slices/cart/types';


const Container = styled.div` 
`
const Wrapper = styled.div` 
    padding: 20px;
`
const Title = styled.h2` 
    font-weight: 300;
    text-align: center;
`
const Top = styled.div` 
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: '15px', flexDirection: 'column', gap: '15px'})}
`

const TopButton = styled.button<{type?: any}>` 
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all .4s ease;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
    &:hover {
        color: white;
        background-color: rgba(0,0,0,0.8);
    }
    &:active {
        background-color: rgba(0,0,0,0.3);
    }
    ${mobile({padding: '15px 35px'})}
`
const TopTexts = styled.div` 
    ${portraitTablets({display: 'none'})};
`

const Bottom = styled.div` 
    display: flex;
    justify-content: space-between;
    ${laptops({flexDirection: 'column',gap: '30px'})}
`
const Info = styled.div` 
    flex: 3;
`

const Summary = styled.div` 
    flex: 1;
    border: .5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 300px;
`
const SummaryTitle = styled.h2` 
    font-weight: 200;
`
const SummaryItem = styled.div<{type?: string}>` 
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span` 
`
const SummaryItemPrice = styled.span` 
`
const Button = styled.button`
    cursor: pointer;
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600; 
    transition: all .4s ease;
    &:hover {
        background-color: rgba(0,0,0,0.9);
    }
    &:active {
        background-color: rgba(0,0,0,0.3);
    }
`

const Cart:FC = () => {
    const navigate = useNavigate();
    const {items, totalPrice, totalCount} = useSelector(selectCart);

    const renderItem = (elements: CartItemType[]) => {

        if (elements.length > 0) {
            return elements.map( (element) => {
                return <CartItem {...element}/>
            })
        }

        return <CartEmpty/>
    }

    const estimatedShipping = 6;
    const shippingDiscount = totalPrice >= 50 ? -estimatedShipping : 0;
    const allSum = totalPrice === 0 ? 0 : totalPrice + estimatedShipping + shippingDiscount;
    return (
        <Container>
            <Announcement/>
            <NavBar/>
            <Wrapper>
                <Title>Your bag</Title>
                <Top>
                    <TopButton onClick={() => navigate('/')}>Continue shopping</TopButton>
                    <TopTexts>
                        <TopTexts>Shopping Bag({totalCount})</TopTexts>
                        <TopTexts>Your Wishlist</TopTexts>
                    </TopTexts>
                    <TopButton type="filled">Checkout now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                       {
                         renderItem(items)
                       }
                    </Info>
                    <Summary>
                        <SummaryTitle>Order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ {estimatedShipping}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ {shippingDiscount}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {allSum}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
} 

export default Cart;