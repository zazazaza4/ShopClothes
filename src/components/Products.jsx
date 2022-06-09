import {useState, useEffect} from 'react';
import {
  useLocation
} from "react-router-dom";

import Skeleton from './Skeleton.jsx';
//redux
import {useSelector, useDispatch} from 'react-redux';
import {setColor, setSize} from '../redux/slices/filtersSlice';
import { fetchProducts } from '../redux/slices/asyncActionsProducts.js';

import styled from 'styled-components';
import Product from './Product.jsx';

const ErrorMessage = styled.div``

const Container = styled.div` 
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fill,  minmax(300px, 1fr));
	grid-column-gap: 10px;
	grid-row-gap: 10px;
`

const Products = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const {items, status} = useSelector( state => state.products);
	const {currentPage, categoryId, searchValue, sort, size, color} = useSelector( state => state.filters);

	const getProducts = () => {
		const category = categoryId > 0 ?  `${categoryId}` : '';
		const search = searchValue;
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
		const sortBy = sort.sortProperty.replace('-', '');
		const filter = `${color}`;

		dispatch(fetchProducts({
			category: String(category),
			search,
			filter,
			currentPage,
			order,
			sortBy
		})) 
		window.scrollTo(0, 0);
	} 

	useEffect(() => {
		getProducts();
	}, [categoryId, location.pathname, searchValue, currentPage, size, color, sort]);

	const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
	const renderItems = items.map( item => <Product item={item} key={item.id}/> );
	
	return (
		<Container>
			{status === 'ERROR' 
				? <ErrorMessage>Error</ErrorMessage> 
				: (status === 'LOADING' ? skeletons : renderItems)
			}
		</Container>
	)
}

export default Products;	