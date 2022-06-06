import {useState, useEffect} from 'react';
import {
  useLocation
} from "react-router-dom";

import Skeleton from './Skeleton.jsx';
//redux
import {useSelector, useDispatch} from 'react-redux';
import {setColorId, setSizeId} from '../redux/slices/filtersSlice';

import styled from 'styled-components';
import Product from './Product.jsx';


const Container = styled.div` 
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fill,  minmax(300px, 1fr));
	grid-column-gap: 10px;
	grid-row-gap: 10px;
`

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const dispatch = useDispatch();
	const {currentPage, categoryId} = useSelector( state => state.filters);

	useEffect(() => {
		setIsLoading(true);
	  const category = categoryId > 0 ?  `${categoryId}` : '';

	  fetch(`https://6293a80e7aa3e6af1a0f013a.mockapi.io/product?page=${currentPage}&limit=8&category=${category}&sortBy=id&order=desc`)
	       .then( res => res.json())
	       .then( arr => {
	         setProducts(arr);
	         setIsLoading(false);
	       });
	}, [categoryId, location.pathname]);

	const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
	const renderItems = products.map( item => <Product item={item} key={item.id}/> );
	return (
		<Container>
			{ isLoading 
				? skeletons 
				: renderItems
			}
		</Container>
	)
}

export default Products;	