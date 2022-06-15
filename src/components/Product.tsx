import { useState, FC } from 'react';
//style
import {landscapeTablets} from '../responsive';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
//react-router
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch } from 'react-redux';
import {addItem} from '../redux/slices/cart/cartSlice';
//for alerts
import { toast } from 'react-toastify';

const Info = styled.div` 
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,.4);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all .5s ease;
	cursor: pointer;
	${landscapeTablets({opacity: '1', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-around'})}
`
const Wrapper = styled.div` 
	display: flex;
	align-items: center;
	justify-content: center;
`

const Container = styled.div` 
	flex: 1 1 200px;
	margin: 5px;
	min-width: 220px;
	max-width: 300px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	&:hover ${Info}{
		opacity: 1;
	}
`
const Circle = styled.div` 
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
` 
const Image = styled.img` 
 	height: 100%;
 	z-index: 2;
 	width: 100%;
`
const Price = styled.div`
	background: white;
	position: absolute;
	z-index: 2;
	bottom: 30px;
	width: 30%;
	height: 30px;
	text-align: center;
	font-size: 24px;
	font-weight: 400;
	border-radius: 50% 50% 0 0;
`
const Name = styled.div<{desired: boolean}>`
	transition: all 1s ease;
	background: ${props => props.desired ? 'teal' : 'white' };
	color: ${props => props.desired ? 'white' : 'black' };;
	position: absolute;
	z-index: 2;
	bottom: 0;
	width: 100%;
	height: 30px;
	text-align: center;
	font-size: 20px;
	font-weight: 600;
`

const Icon = styled.div<{desired?: boolean}>` 
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: ${props => props.desired ? 'white' :'black'};
	background-color: ${props => props.desired ? 'teal' :'white'};
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all .5s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
		color:black;
	}
	&:active {
      background-color: teal;
   }
   ${landscapeTablets({width: '50px', height: '50px', border: '1px solid teal', backgroundColor: '#e9f5f5'})}
`

type ProductProps = {
	id: string;
	title: string;
	price: number;
	img: string;
	size:  string[];
	color: string[];
  };

const Product:FC<ProductProps> = ({price, img, id, title, color, size}) => {

	const [desired, setDesired] = useState<boolean>(false);
	let navigate = useNavigate();
	const dispatch = useDispatch();

	const addOneItemToCart = () => {
		dispatch(addItem({price, img, id, title, color: color[0], size: size[0], count: 1}));
		toast.success('Success, the good is added', {
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

	const clickSingleProducts = () => {
		navigate(`/products/${id}`);
		window.scrollTo(0, 0);
	}
	
	return (
		<Wrapper>
			<Container>
				<Circle/>
				<Image src={img}/>
				<Price >{price}$</Price>
				<Name desired={desired}>{title}</Name>
				<Info>
					<Icon>
						<ShoppingCartIcon  onClick={addOneItemToCart}/>
					</Icon>
					<Icon 
							desired={desired}
							onClick={ () => {
								setDesired(desired => !desired)
							}}>
						<FavoriteBorderIcon />
					</Icon>
					<Icon onClick={clickSingleProducts}>
						<SearchIcon/>
					</Icon>
				</Info>
			</Container>
		</Wrapper>
	)
}

export default Product;	