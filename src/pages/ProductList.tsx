import {FC} from 'react';
//data
import {filters} from '../data';
//redux
import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/slices/filters/selector';
import {useSelector} from 'react-redux';
import {setSize, setSort} from '../redux/slices/filters/filtersSlice';

import {mobile} from '../responsive';
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';



const Container = styled.div`
`
const Title = styled.h2` 
    margin: 20px;
`
const FilterContainer = styled.div` 
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div` 
    margin: 20px;
`
const FilterText = styled.span` 
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({marginTop: '8px', padding: '10px 16px'})}
`
const Option = styled.option`   
`

type sizeItem = {
    title: string
}

const ProductList: FC = () => {
    const dispatch = useAppDispatch();
    const {size} = useSelector(selectFilter);

    const {Size, Sort} = filters;

    const onChangeActiveSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const valueEvent = event.target.value;

        if (valueEvent !== "Size") {
            dispatch(setSize(valueEvent.toLowerCase()))
        } else {
            dispatch(setSize(''))
        }
    };

    const renderOptionsFilter = (arr: sizeItem[]) => {
        return arr.map( (item) => {
            const {title} = item;
            return <Option key={title} value={title}>{title}</Option>
        });
    }

    const onChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const valueEvent = JSON.parse(event.target.value);
        dispatch(setSort(valueEvent));
    }

    return (
        <Container>
            <NavBar/>
            <Announcement/>
            <Title>Clothes</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select onChange={onChangeActiveSize}>
                        <Option disabled defaultValue={size}>
                            Size
                        </Option>
                        {
                            renderOptionsFilter(Size)
                        }
                    </Select>
                </Filter>
                 <Filter>
                    <FilterText>Sort Products:</FilterText>
                     <Select  onChange={onChangeSort}>
                         {
                            Sort.map( item => {
                                const {name} = item; 
                                return <Option value={JSON.stringify(item)} key={name}>{name}</Option>
                            })
                         }
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
} 

export default ProductList;