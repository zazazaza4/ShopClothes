import Announcement from '../components/Announcement.jsx';
import NavBar from '../components/NavBar.jsx';
import Slider from '../components/Slider.jsx';
import Products from '../components/Products.jsx';
import Categories from '../components/Categories.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Footer from '../components/Footer.jsx';
import styled from 'styled-components';

const Container = styled.div` 
`

const Home = () => {
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