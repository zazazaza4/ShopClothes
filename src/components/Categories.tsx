import {FC} from 'react';

import CategoryItem from './CategoryItem';
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

const Categories: FC = () => {

	return (
		<Container>
			{categories.map( (item: any) => (
				<CategoryItem key={item.id} {...item}/>
			))}
		</Container>
	)
}

export default Categories;