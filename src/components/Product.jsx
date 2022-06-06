import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

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
`
const Wrapper = styled.div` 
	display: flex;
	align-items: center;
	justify-content: center;
`

const Container = styled.div` 
	flex: 1 1 200px;
	margin: 5px;
	min-width: 280px;
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
const Name = styled.div`
	background: white;
	position: absolute;
	z-index: 2;
	bottom: 0;
	width: 100%;
	height: 30px;
	text-align: center;
	font-size: 20px;
	font-weight: 600;
`

const Icon = styled.div` 
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all .5s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
	&:active {
      background-color: teal;
   }
`

const Product = ({item}) => {
	const {price, img, id} = item;
	let navigate = useNavigate();

	const clickSingleProducts = () => {
		navigate(`/products/${id}`);
		window.scrollTo(0, 0);
	}

	return (
		<Wrapper>
			<Container>
				<Circle/>
				<Image src={img}/>
				<Price>{price}$</Price>
				<Name>Nike v4</Name>
				<Info>
					<Icon>
						<ShoppingCartIcon/>
					</Icon>
					<Icon>
						<FavoriteBorderIcon/>
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