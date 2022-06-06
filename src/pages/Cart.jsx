import Announcement from '../components/Announcement.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import styled from 'styled-components';
//mui
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//redux
import { useDispatch, useSelector } from 'react-redux';

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

const Cart = () => {
    const dispatch = useDispatch();
    const {items, totalPrice} = useSelector(state => state.cart);

    const totalCount = 2;//dispatch(getTotalCount());

    return (
        <Container>
            <Announcement/>
            <NavBar/>
            <Wrapper>
                <Title>Your bag</Title>
                <Top>
                    <TopButton>Continue shopping</TopButton>
                    <TopTexts>
                        <TopTexts>Shopping Bag({totalCount})</TopTexts>
                        <TopTexts>Your Wishlist</TopTexts>
                    </TopTexts>
                    <TopButton type='filled'>Checkout now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F33%2F15%2F331578a9fdf78d09b6cd39bab2ef5d2f64f62825.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_dresses_bodycon%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"/>
                                <Details>
                                    <ProductName><b>Product:</b> fkskldlak adadad</ProductName>
                                    <ProductId><b>ID:</b> 121131</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b> 21.3</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon/>
                                    <ProductAmount>1</ProductAmount>
                                    <AddIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                            <ProductDelete>
                                <ClearIcon />
                            </ProductDelete>
                        </Product>
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
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