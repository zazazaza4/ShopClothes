import styled from 'styled-components';

import img from '../assets/EmptyCart.jpg';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    flex-direction: column;
`

const Image = styled.img`
    width: 20rem;
    height: 20rem;
    flex: 5;
`

const Text = styled.div`
    flex: 1;
    text-align: center;
`
const Title = styled.h3`
    font-size: 26px;
`
const Description = styled.p`
    font-size: 16px;
    margin: 20px;
`
const Button = styled.button`
    font-size: 20px;
    padding: 10px;
    margin-top: 30px;
    font-size: 20px;
    color: white;
    border: none;
    background-color: teal;
    cursor: pointer;
    &:hover {
        background-color: #3c9cad;
    } 
    &:active {
        background-color: #0dd8d8;
    }
`

const CartEmpty = () => {
  return (
    <Container>
        <Image src={img}/>
        <Text>
            <Title>Your cart is empty</Title>
            <Description>
                Looking like you have not addedanything yo your cart.
            </Description>  
            <Button>
                Go Shopping
            </Button>
        </Text>
    </Container>
  )
}

export default CartEmpty;