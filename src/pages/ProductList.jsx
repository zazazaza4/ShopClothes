import {useEffect, useState} from 'react';
import {filters} from '../data';
//redux
import {useSelector, useDispatch} from 'react-redux';
import {setColorId, setSizeId} from '../redux/slices/filtersSlice';

import {mobile} from '../responsive';
import Announcement from '../components/Announcement.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import styled from 'styled-components';
import Products from '../components/Products.jsx';
import Newsletter from '../components/Newsletter.jsx';


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

const ProductList = () => {
    const dispatch = useDispatch();
    const {sizeId, colorId, currentPage} = useSelector( state => state.filters);

    const {Size, Color} = filters;

    const onChangeActive = (event, fun) => {
        const valueEvent = event.target.value;
        //check on a result exists or not
        if (!(typeof +valueEvent === 'number' && isNaN(valueEvent))) {
            dispatch(fun(valueEvent))
        } else {
            dispatch(fun(0))
        }
    };

    return (
        <Container>
            <NavBar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select onChange={(e) => onChangeActive(e, setSizeId)}>
                        <Option desabled selected defaultValue={sizeId}>
                            Size
                        </Option>
                        {
                            Size.map( item => {
                                const {value, title} = item;
                               { return <Option key={value} value={value}>{title}</Option>}
                            })
                        }
                    </Select>
                     <Select onChange={(e) => onChangeActive(e, setColorId)}>
                        <Option desabled selected defaultValue={sizeId}>
                            Color
                        </Option>
                         {
                            Color.map( item => {
                                const {value, title} = item;
                               { return <Option value={value} key={value}>{title}</Option>}
                            })
                        }
                    </Select>
                </Filter>
                 <Filter>
                    <FilterText>Sort Products:</FilterText>
                     <Select>
                        <Option selected>
                            Rating
                        </Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
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