import Announcement from '../components/Announcement.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import CartItem from '../components/CartItem.jsx';
import styled from 'styled-components';
import {mobile, landscapeTablets, laptops} from '../responsive';
//react router
import {useNavigate} from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import {removeItem} from '../redux/slices/cartSlice';
//react
import {useState} from 'react';

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
`
const TopButton = styled.button` 
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
`
const TopTexts = styled.div` 
    
`
const TopText = styled.div` 
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`
const Bottom = styled.div` 
    display: flex;
    justify-content: space-between;
`
const Info = styled.div` 
    flex: 3;
`

const Summary = styled.div` 
    flex: 1;
    border: .5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h2` 
    font-weight: 200;
`
const SummaryItem = styled.div` 
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

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [estimatedShipping, setEstimatedShipping] = useState(6.2);
    const {items, totalPrice, totalCount} = useSelector(state => state.cart);

    const renderItem = (elements) => {
        return elements.map( (element) => {
            return <CartItem item={element}/>
        })
    }

    const shippingDiscount = totalPrice >= 50 ? -estimatedShipping : 0;
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
                    <TopButton type='filled'>Checkout now</TopButton>
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
                            <SummaryItemPrice>$ {totalPrice + estimatedShipping + shippingDiscount}</SummaryItemPrice>
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