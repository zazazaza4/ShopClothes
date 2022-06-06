import {useState} from 'react';

import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import {mobile, landscapeTablets, portraitTablets} from '../responsive';

//redux
import { useDispatch } from 'react-redux';

const Container = styled.div` 
    height: 60px;
    ${mobile({height: '50px'})}
`
const Wrapper = styled.div` 
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${landscapeTablets({padding: '10px 15px 0px 10px'})}
`

const Left = styled.div` 
    flex: 1;
    display: flex;
    align-items: center;
    ${landscapeTablets({justifyContent: 'center'})}
    ${portraitTablets({flex: '.75',justifyContent: 'start'})}
`
const Language = styled.span` 
    font-size: 14px;
    cursor: pointer;
    ${landscapeTablets({display: 'none'})}
`
const SearchContainer = styled.div` 
    border: 1px solid lightgray;
    display: flex;
    align-content: center;
    margin-left: 25px;
    padding: 5px;
    ${landscapeTablets({marginLeft: '0px', justifyContent: 'center', width: '75%'})}
`
const Input = styled.input` 
    border: none;
    &:focus {
        outline: none;
    }
    ${landscapeTablets({width: '100%'})}
    ${portraitTablets({width: '90%'})}
`

const Center = styled.div` 
    flex: 1;
    text-align: center;
    ${landscapeTablets({display: 'none'})}
`
const Logo = styled.div` 
    font-weight: bold;
    font-size: 24px;
    a {
        &:hover {
            color: gray;
        }
        &:active {
            color: teal;
        }
    }
`

const Right = styled.div` 
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${landscapeTablets({fontSize: '13px', justifyContent: 'space-around'})}
`
const MenuItem = styled.div` 
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;  
    ${landscapeTablets({fontSize: '13px'})}
    ${portraitTablets({marginLeft: '5px'})}
    a {
        &:hover {
            color: gray;
        }
        &:active {
            color: teal;
        }
    }
`

const NavBar = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const totalCount = 2;

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input
                            name="search"
                            type="text"
                            placeholder="search... "
                            value={search}
                            onChange={event => setSearch(event.target.value)}
                        />
                        <SearchIcon style={{color: 'grey', fontSize: 16}}/>
                    </SearchContainer>
                </Left> 
                <Center>
                    <Logo>
                        <Link to="/">DROP.</Link>
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                       <Link to="/register">REGISTER</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/login">SIGN IN</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/cart">
                            <Badge badgeContent={totalCount} color='primary'>
                              <ShoppingCartIcon />
                            </Badge>
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
} 

export default NavBar;