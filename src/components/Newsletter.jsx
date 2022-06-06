import {useState} from 'react';

//style
import styled from 'styled-components';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import  {laptops, portraitTablets, mobile} from '../responsive';

const Container = styled.div` 
	height: 60vh;
	background-color: #fcf5f5;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 15px;
	${portraitTablets({margin: '0px'})}
`
const Title = styled.h2` 
	font-size: 70px;
	margin-bottom: 20px;
	${portraitTablets({fontSize: '50px'})}
`
const Description = styled.div` 
	font-size: 24px;
	font-weight: 300; 
	margin-bottom: 20px;
	text-align: center;
`
const InputContainer = styled.div` 
	width: 50%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid  lightgray;
	${laptops({width: '80%'})}
	${mobile({width: '90%'})}
`
const Input = styled.input` 
	border: none;
	flex: 8;
	padding-left: 20px;
	${laptops({flex: '5'})}
	${mobile({flex: '2',paddingLeft: '5px'})}
`

const Button = styled.button` 
	flex: 1;
	border: none;
	cursor: pointer;
	background-color: teal;
	&:hover {
		background-color: darkcyan;
	}
	&:active {
		background-color: cyan;
	}
`

const Newsletter = () => {
	const [newsletter, setNewsletter] = useState('');

	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>Newsletter send dent dasr ada adaldlada!</Description>
			<InputContainer>
				<Input
					name='newsletter'
					type='text'
					value={newsletter}
					onChange={event => setNewsletter(event.target.value)}
				/>
				<Button>
					<SendRoundedIcon/>
				</Button>
			</InputContainer>
		</Container>
	)
}

export default Newsletter;