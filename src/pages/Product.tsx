import {useEffect, useState, useRef} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import {mobile, landscapeTablets, portraitTablets, laptops} from '../responsive';
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//redux
import {useSelector} from 'react-redux';
import { useAppDispatch } from '../redux/store';
import {addItem} from '../redux/slices/cart/cartSlice';
import {selectFilter } from '../redux/slices/filters/selector'; 
import { CartItem } from '../redux/slices/cart/types';
//for alerts
import { toast } from 'react-toastify';
//helmet
import {Helmet} from 'react-helmet';


const Container = styled.div` 
`
const Wrapper = styled.div` 
 	padding: 50px;
 	display: flex;
 	${laptops({flexDirection: 'column'})}
 	${landscapeTablets({padding: '20px'})}
	 ${mobile({padding: '5px'})}
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
	&:focus {
		border: 0.5px solid red;
	}
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

interface ProductType {
	id: string;
	img: string;
	color: string[];
	size: string[];
	desc: string;
	title: string;
	price: number;
}

const Products = () => {
	const [product, setProduct] = useState<ProductType>({
		img: '', 
		color: [], 
		size: [], 
		desc: '', 
		title: "", 
		price: 0, 
		id: ''
	}
	);
	const [amount, setAmount] = useState<number>(1);

	const {img, color = [], size = [], desc, title = "", price, id} = product as ProductType;
	const {categoryName} = useSelector(selectFilter);

	const [sizeChosen,  setSizeChosen] = useState('');
	const [colorChosen,  setColorChosen] = useState('');

	const colorRefs = useRef<any[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { productId } = useParams();
	const dispatch = useAppDispatch();

	const loadedProduct = (obj: ProductType) => {
		setProduct(obj);
		setSizeChosen(obj.size[0])
		setIsLoading(false)
	}

	const addToCart = () => {
		if (colorChosen && sizeChosen) { 
			
			const addedProduct: CartItem = {img, title, id, price, count: amount, size: sizeChosen , color: colorChosen};
			
			dispatch(addItem(addedProduct));
			setAmount(amount => 1);
			toast.success('Sucess, the good is added', {
				position: "bottom-right",
				autoClose: 1000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
				theme: "colored"
			});
		} else {
			toast.error('Color or Size aren`t chosen! Try again!', {
				position: "bottom-right",
				autoClose: 1000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
				theme: "colored"
			});
		}
	}

	const changeAmount = (i: number) => {
		if (amount + i <= 0) {
			console.log('error')
		} else {
			setAmount(amount => amount + i)
		}
	} 

	const focusOnColor = (id: number) => {
		colorRefs.current.forEach(element => {
			element.style.border = 'none';
		});
		colorRefs.current[id].style.border = '2px solid teal';
	}

	const onChangeActive = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const valueEvent = event.target.value;
		const size = valueEvent !== "Size" ? valueEvent : '';
		setSizeChosen(size);
    };

	useEffect(() => {
		setIsLoading(true)
		axios.get(`https://6293a80e7aa3e6af1a0f013a.mockapi.io/${categoryName}?id=${productId}`)
			.then(res => res.data[0])
			.then(loadedProduct)
			.catch((error) => {
			    console.log(error);
			})
	}, [productId, categoryName]);

	return (
		<Container>
			<Helmet>
                <meta
                    name="description"
                    content="Latest trends in clothing for women, men & kids at DROP online. Find new arrivals, fashion catalogs, collections & lookbooks every week."
                />
                <title>{title} | DROP US</title>
			</Helmet>
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
							 {
								color.map( (item: any, i: number) => {
									return <FilterColor 
												ref={elem => colorRefs.current[i] = elem}
												onClick={() => {
													setColorChosen(item);
													focusOnColor(i);
												}} 
												color={item}
											/>
								})
							 }
         				</Filter>
         				<Filter>
         					<FilterTitle>Size</FilterTitle>
         					<FilterSize onChange={onChangeActive}>
								 {
									 size.map( (item: any) => {
										return <FilterSizeOption value={item}>{item}</FilterSizeOption>
									})
								 }
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