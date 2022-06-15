import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import {landscapeTablets} from '../responsive';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
`
const Wrapper = styled.div` 
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Error = styled.div`
    ${landscapeTablets({width: '80%'})} 
`
const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 30px;
    ${landscapeTablets({fontSize: '24px', marginBottom: '15px'})}
`
const Desc = styled.p`
    margin-bottom: 20px;
    font-size: 20px;
    padding: 30px;
    ${landscapeTablets({fontSize: '16px', padding: '15px'})}
`
const Button = styled(Link)`
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 20px;
    transition: all .7s ease;
    &:hover {
        color: white;
        background-color: black;
    }
`

const Page404 = () => {
    return (
        <Container>
            <Announcement/>
            <NavBar/>
            <Wrapper>
                <Error>
                    <Title>The Page cannot be found</Title>
                    <Desc>
                        <p>It looks like something has gone wrong, you may have mistyped the address or the page has been removed.</p>
                        <p>Try again or return to our homepage, where you can find all the latest news.</p>
                    </Desc>
                    <Button to='/'>Return home</Button>
                </Error>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
} 

export default Page404;