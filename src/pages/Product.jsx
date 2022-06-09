import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import {mobile, landscapeTablets, portraitTablets, laptops} from '../responsive';
import Announcement from '../components/Announcement.jsx';
import NavBar from '../components/NavBar.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Footer from '../components/Footer.jsx';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//redux
import { useDispatch } from 'react-redux';
import {addItem} from '../redux/slices/cartSlice';
//for alerts
import { toast } from 'react-toastify';


const Container = styled.div` 
`
const Wrapper = styled.div` 
 	padding: 50px;
 	display: flex;
 	${laptops({flexDirection: 'column'})}
 	${landscapeTablets({padding: '20px'})}
`
const ImgContainer = styled.div` 
 	flex: 1;
`
const Image = styled.img` 
 	width: 100%;
 	height: 90vh;
 	object-fit: cover;
 	${laptops({height: '80vh'})}
`
const InfoContainer = styled.div` 
  	flex: 1;
  	padding: 0px 50px;
  	${laptops({textAlign: 'center'})}
  	${portraitTablets({padding: '0px 20px'})}
`
const Title = styled.h2` 
	font-weight: 200;
`
const Desc = styled.p` 
	margin: 20px 0px;
`
const Price = styled.span` 
 	font-size: 40px;
 	font-weight: 100;
`
const FilterContainer = styled.div` 
 	width: 50%;
 	margin: 30px 0px;
 	display: flex;
 	justify-content: space-between;
 	${laptops({width: '100%'})}
 	${mobile({flexDirection: 'column', gap: '20px', alignItems: 'center'})}
`
const Filter = styled.div` 
	display: flex;
	align-items: center;
`
const FilterTitle = styled.h4` 
 	font-size: 20px;
 	font-weight: 200;
`
const FilterColor = styled.div` 
 	width: 20px;
 	height: 20px;
 	border-radius: 50%;
 	background-color: ${(props) => props.color};
 	margin: 0px 5px;
 	cursor: pointer;
`
const FilterSize = styled.select` 
	margin-left: 10px;
	padding: 5px;
`
const FilterSizeOption = styled.option` 

`
const AddContainer = styled.div` 
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${laptops({flexDirection: 'column', gap: '30px', width: '100%'})}
`
const AmountContainer = styled.div` 
	display: flex;
	align-items: center;
	font-weight: 700;
`
const Amount = styled.span` 
	width: 30px;
 	height: 30px;
 	border-radius: 10px;
 	border: 1px solid teal;
 	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
`
const Button = styled.button` 
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	transition: all .5 ease;
	&:hover {
		background-color: teal;
	}
	&:active {
		background-color: #f8f4f4;
	}
	${mobile({padding: '15px 40px'})}
`

const Products = () => {
	const [product, setProduct] = useState({});
	const [amount, setAmount] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const { productId } = useParams();
	const dispatch = useDispatch();

	const loadedProduct = obj => {
		setProduct(obj);
		setIsLoading(false)
	}

	const addToCart = () => {
		dispatch(addItem({...product, count: amount}));
		setAmount(amount => 1);
		toast.success('Sucess, the good is added', {
			position: "bottom-right",
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: "colored"
		});
	}

	const changeAmount = (i) => {
		if (amount + i <= 0) {
			console.log('error')
		} else {
			setAmount(amount => amount + i)
		}
	} 

	useEffect(() => {
		setIsLoading(true)
		axios.get(`https://6293a80e7aa3e6af1a0f013a.mockapi.io/product?id=${productId}`)
			.then(res => res.data[0])
			.then(loadedProduct)
			.catch((error) => {
			    console.log(error);
			})
	}, [productId]);

	const {img, color = '', size, desc, title = "", price} = product;
	return (
		<Container>
            <NavBar/>
         	<Announcement/>
         	<Wrapper>
         		<ImgContainer>
         			<Image src={img}/>
         		</ImgContainer>
         		<InfoContainer>
         			<Title>{title}</Title>
         			<Desc>
         				{desc}
         			</Desc>
         			<Price>${price}</Price>
         			<FilterContainer>
         				<Filter>
         					<FilterTitle>Color</FilterTitle>
         					<FilterColor color='black'/>
         					<FilterColor color='darkblue'/>
         					<FilterColor color='gray'/>
         				</Filter>
         				<Filter>
         					<FilterTitle>Size</FilterTitle>
         					<FilterSize>
         						<FilterSizeOption>XS</FilterSizeOption>
         						<FilterSizeOption>S</FilterSizeOption>
         						<FilterSizeOption>M</FilterSizeOption>
         						<FilterSizeOption>L</FilterSizeOption>
         						<FilterSizeOption>XL</FilterSizeOption>
         					</FilterSize>
         				</Filter>
         			</FilterContainer>
         			<AddContainer>
         				<AmountContainer>
         					<RemoveIcon
         						onClick={() => changeAmount(-1)}
         						style={{cursor: 'pointer'}}/>
         					<Amount>
         						{amount}
         					</Amount>
         					<AddIcon 
         						onClick={() => changeAmount(1)}
         						style={{cursor: 'pointer'}}/>
         				</AmountContainer>
         				<Button disabled={isLoading} onClick={addToCart}>
         					ADD TO CART
         				</Button>
         			</AddContainer>
         		</InfoContainer>
         	</Wrapper>
            <Newsletter/>
            <Footer/>
		</Container>
	)
}

export default Products;	