import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {laptops} from '../responsive';
import { Link } from "react-router-dom";

const Container = styled.div` 
    display: flex;
    justify-content: center;
    ${laptops({display: 'block', textAlign: 'center'})}
`
const Left = styled.div` 
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h2` 
    font-weight: bold;
`
const Desc = styled.p` 
   margin: 20px 0px;
`
const SocailContainer = styled.div` 
    display: flex;
    ${laptops({justifyContent: 'center'})}
`
const SocialIcon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    transition: all .4s ease;
    &:hover {
        opacity: .8;
    }
    &:active {
        opacity: 0.1;
    }
`
const Center = styled.div` 
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padiing: 0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 30px;
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
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    ${laptops({justifyContent: 'center'})}
`
const Payment = styled.img`
    width: 50%
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DROP.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus, facere, fugiat. Dignissimos sed laborum 
                    eius eaque. Aspernatur quo nemo odit explicabo officiis 
                    ut repudiandae et repellendus est maxime accusantium,  
                </Desc>
                <SocailContainer>
                    <SocialIcon color='3B5999'>
                        <FacebookIcon/>
                    </SocialIcon>
                     <SocialIcon color='E4405F'>
                        <InstagramIcon/>
                    </SocialIcon>
                     <SocialIcon color='55ACEE'>
                        <TwitterIcon/>
                    </SocialIcon>
                     <SocialIcon color='E60023'>
                        <PinterestIcon/>
                    </SocialIcon>
                </SocailContainer>
            </Left> 
            <Center>
                <Title>
                    Useful Links
                </Title>
                <List>
                    <ListItem>
                        <Link to="/">Home</Link>
                    </ListItem>
                    <ListItem><Link to="/cart">Cart</Link></ListItem>
                    <ListItem><Link to="/products">Man Fanhion</Link></ListItem>
                    <ListItem><Link to="/products">Woman Fanhion</Link></ListItem>
                    <ListItem><Link to="/accessories">Accessories</Link></ListItem>
                    <ListItem><Link to="/account">My Account</Link></ListItem>
                    <ListItem><Link to="/order">Order Tracking</Link></ListItem>
                    <ListItem><Link to="/wishlist">Wishlist</Link></ListItem>
                    <ListItem><Link to="/terms">Terms</Link></ListItem>
                </List>
            </Center>
            <Right>
                 <Title>
                    Contact
                </Title>
                <ContactItem>
                    <PlaceOutlinedIcon style={{marginRight: '10px'}}/>
                    Kharkiv,aladal, adkla
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{marginRight: '10px'}}/>
                    +380663223121
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{marginRight: '10px'}}/>
                    6715414@gmail.com
                </ContactItem>
                <Payment src=''/>
            </Right>
        </Container>
    )
} 

export default Footer;