import {FC} from 'react'; 
//components
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
//style
import styled from 'styled-components';

const Container = styled.div` 
`

const Home:FC = () => {
    return (
        <Container>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <Categories/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
} 

export default Home;