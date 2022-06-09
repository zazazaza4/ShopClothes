import {useState} from "react";
import { Link } from "react-router-dom";
//formik
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
//style
import styled from 'styled-components';
import loginBg from '../assets/backgroundLog.jpg';
import  {laptops, landscapeTablets} from '../responsive';


const Container = styled.div` 
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
		rgba(255,25,255,.7),
		rgba(25,255,255,.6)
	), url(${loginBg}) center / cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`	
const Wrapper = styled.div` 
	border-radius: 5px;
 	padding: 20px;
 	width: 28%;
 	background-color: white;
 	${laptops({width: '40%'})}
 	${landscapeTablets({width: '70%'})}
`
const Title = styled.h2` 
 	font-size: 24px;
 	font-weight: 300;
`
const Form = styled.form` 
 	  display: flex;
 	  flex-direction: column;
`
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
	${landscapeTablets({marginTop: '20px'})}
`
const Button = styled.button`
	min-width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	cursor: pointer;
	color: ghostwhite;
	margin-bottom: 10px;
	font-size: 20px;
	transition: all .5 ease;
	&:hover {
		background-color: darkcyan;
	}
	&:active {
		background-color: cyan;
	}
	${landscapeTablets({marginTop: '20px'})}
`
const LinkItem = styled.div` 
	margin: 6px 0;
	font-size: 16px;
	cursor: pointer;
	text-decoration: underline;
	&:hover {
		text-decoration: none;
	}
	&:active {
		font-weight:600;
	}
`
const ErrorMessage = styled.div`
	font-size: 12px;
	color: #E41B17;
	text-align: center;
`

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input 
						type="text"
						name="username" 
						placeholder='username'
						value={username}
						onChange={event => setUsername(event.target.value)}
					/>
					<Input 
						type="password" 
						name="password"
						placeholder='password'
						value={password}
						onChange={event => setPassword(event.target.value)}
					/>
					<Button onClick={(e) => e.preventDefault()}>Login</Button>
					<LinkItem>
						<Link to='/forgot-password'>Do not you remember the password ?</Link>
					</LinkItem>
					<LinkItem>
						<Link to='/register'>Create a new account</Link>
					</LinkItem>
				</Form>
			</Wrapper>
		</Container>
	)
}

export default Login;	