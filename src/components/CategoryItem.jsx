import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { landscapeTablets, laptops} from '../responsive';
//redux
import { useDispatch } from 'react-redux';
import {setCategoryId} from '../redux/slices/filtersSlice';

const Container = styled.div` 
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;
	${laptops({height: '60vh'})}
	${landscapeTablets({height: '30vh'})}
`
const Image = styled.img` 
	width: 100%;
	height: 100%;
	object-fit: cover;
`
const Info = styled.div` 
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Title = styled.h2` 
	color: white;
	font-size: 44px;
	font-weight: 600;
	margin-bottom: 20px;
	${laptops({fontSize: '30px'})}
`
const Button = styled.h2` 
	border: none;
	border-radius: 10% 0 10% 0;
	padding: 10px;
	background-color: white;
	color: gray;
	cursor: pointer;
	transition: all .3s ease;
	font-weight: 600;
	&:hover {
		color: black;
	} 
	&:active {
      color: teal;
   }
`

const CategoryItem = ({item}) => {
	const {img, title, id, category} = item;
	let navigate = useNavigate();
	const dispatch = useDispatch();

	function handleClick(id) {
		dispatch(setCategoryId(id));
		navigate("/products");
		window.scrollTo(0, 0);
	}

	return (
		<Container>
			<Image src={img}/>
			<Info>
				<Title>{title}</Title>
				<Button onClick={() => handleClick(category)}>SHOP NOW</Button>
			</Info>
		</Container>
	)
}

export default CategoryItem;