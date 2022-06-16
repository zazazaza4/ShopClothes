import {FC} from 'react'; 
//components
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
//helmet
import {Helmet} from 'react-helmet';
//style
import styled from 'styled-components';

const Container = styled.div` 
`

const Home:FC = () => {
    return (
        <Container>
            <Helmet>
                <meta
                    name="description"
                    content="Latest trends in clothing for women, men & kids at DROP online. Find new arrivals, fashion catalogs, collections & lookbooks every week."
                />
                <title>DROP. | Online Fashion, Homeware & Women Clothes | DROP. US</title>
            </Helmet>
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