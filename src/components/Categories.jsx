import CategoryItem from './CategoryItem.jsx';
//style
import styled from 'styled-components';
import {categories} from '../data';
import {landscapeTablets} from '../responsive';

const Container = styled.div` 
	display: flex;
	padding: 20px;
	justify-content: 'space-between';
	${landscapeTablets({display: 'block'})}
`

const Categories = () => {

	return (
		<Container>
			{categories.map( item => (
				<CategoryItem key={item.id} item={item}/>
			))}
		</Container>
	)
}

export default Categories;