import styled from 'styled-components';
import {useState, FC} from 'react';
//react-router
import { useNavigate } from 'react-router-dom';

import {sliderItems} from '../data';
//responsive
import {mobile, portraitTablets, landscapeTablets} from '../responsive';
//mui-icons
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
//redux
import { useDispatch } from 'react-redux';
import {setCategoryId} from '../redux/slices/filters/filtersSlice';

const Container = styled.div` 
   height: 100vh;
   width: 100vw;
   display: flex;
   position: relative;
   overflow: hidden;
   ${portraitTablets({height: '80vh'})}
   ${mobile({height: '65vh'})}
`
const Arrow  = styled.div<{direction: string}>` 
   height: 50px;
   width: 50px;
   background-color: #fff7f7;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${props => props.direction === 'left' && '10px'};
   right: ${props => props.direction === 'right' && '10px'};
   margin: auto;
   cursor: pointer;
   opacity: .7;
   z-index: 2;
   transition: all .5s ease;

   &:hover {
   	opacity: 1;
   }
`

const Wrapper = styled.div<{slideIndex: number}>` 
   height: 100%;
   display: flex;
   transition: all 2s ease;
   transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div<{bg: string}>` 
 	height: 100vh;
   width: 100vw;
   display: flex;
   align-items: center;
   background-color: #${props => props.bg};
	${portraitTablets({height: '80vh'})}
	${mobile({position: 'relative'})}
`
const ImgContainer = styled.div` 
   flex: 1;
   max-height: 90%;
   ${portraitTablets({height: '85%'})}
   ${mobile({
   	position: 'absolute', 
   	top: '0px',
   	left: "0",
   	width: '100%',
   	height: '100%',
   	zIndex: '1',
   	pointerEvents: 'none'
   })}
`
const Image = styled.img` 
   height: 80%;
   width: 100%;
   object-fit: cover;
   ${mobile({height: '100%', opacity: '.3',	zIndex: '1'})}
`
const InfoContainer = styled.div` 
   flex: 1;
   padding: 60px;
   ${mobile({zIndex: '2', paddingTop: '16px'})}
`
const Title = styled.h2` 
   font-size: 70px;
   ${landscapeTablets({fontSize: '40px'})}
   ${portraitTablets({fontSize: '30px'})}
`
const Desc = styled.p` 
   margin: 50px 0;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
   ${portraitTablets({fontSize: '16px', margin: '20px 0'})}
`
const Button = styled.button` 
   padding: 10px;
   font-size: 20px;
   background-color: transparent;
   cursor: pointer;
`

const Slider: FC = () => {
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const changeNavigate = (id: number) => {
		dispatch(setCategoryId(id));
		navigate("/products");
		window.scrollTo(0, 0);
	}

	const handleClick = (direction: string) => {
		if (direction === 'left') {
			setSlideIndex( slideIndex > 0 ?  slideIndex - 1 : 2);
		} else {
			setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0);
		}
	}

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick('left')}>
				<ArrowCircleLeftOutlinedIcon/>
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item, i) => {
					const {bg, img, title, desc, category} = item;
					return (
						<Slide key={i} bg={bg}>
							<InfoContainer>
								<Title>{title}</Title>
								<Desc>{desc}</Desc>
								<Button onClick={() => changeNavigate(category)}>Show now</Button>
							</InfoContainer>
							<ImgContainer>
								<Image src={img}/>
							</ImgContainer>
						</Slide>
					)
				})}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick('right')}>
				<ArrowCircleRightOutlinedIcon/>
			</Arrow>
		</Container>
	)
}

export default Slider;	