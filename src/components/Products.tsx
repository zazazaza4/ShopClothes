import {useEffect, FC} from 'react';
//react-router
import {
  useLocation
} from "react-router-dom";

//responsive
import {mobile} from '../responsive';
//skeleton
import Skeleton from './Skeleton';
//redux
import {useAppDispatch} from '../redux/store';
import {useSelector} from 'react-redux';
import { fetchProducts } from '../redux/slices/products/asyncActionsProducts';
import {selectFilter } from '../redux/slices/filters/selector'; 
import {selectProductData} from '../redux/slices/products/selector'; 

import styled from 'styled-components';
import Product from './Product';

const ErrorMessage = styled.div``

const Container = styled.div` 
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fill,  minmax(300px, 1fr));
	grid-column-gap: 10px;
	grid-row-gap: 10px;
	${mobile({padding:'0px', gridTemplateColumns: 'repeat(auto-fill,  minmax(240px, 1fr))'})}
`

const Products: FC = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const {items, status} = useSelector(selectProductData);
	const {currentPage, categoryId, searchValue, sort, size} = useSelector(selectFilter);

	const getProducts = async () => {
		const category = categoryId > 0 ?  `${categoryId}` : '';
		const search = searchValue;
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
		const sortBy = sort.sortProperty.replace('-', '');
		const filter = size !== '' ? size : '';

		dispatch(fetchProducts({
			category: category,
			search,
			filter,
			currentPage: String(currentPage),
			order,
			sortBy
			}),
		);

		window.scrollTo(0, 0);
	} 

	useEffect(() => {
		getProducts();
	}, [categoryId, location.pathname, searchValue, currentPage, size, sort.sortProperty]);

	const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
	const renderItems = items.map( (item: any) => <Product {...item} key={item.id}/> );
	
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