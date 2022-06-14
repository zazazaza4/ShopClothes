import {useState, FC} from 'react';
//formik
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
//style
import regBg from '../assets/backgroundReg.jpg';
import styled from 'styled-components';
import  {mobile, laptops, landscapeTablets} from '../responsive';
//for alerts
import { toast } from 'react-toastify';
//axios
import axios from 'axios';

const Container = styled.div` 
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
		rgba(25,255,255,.5),
		rgba(255,25,255,.5)
	), url(${regBg}) center / cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`	
const Wrapper = styled.div` 
	border-radius: 5px;
	padding: 20px;
	width: 40%; 
	background-color: white;
	${laptops({width: '40%'})}
	${landscapeTablets({width: '70%'})}
`
const Title = styled.h2` 
 	font-size: 24px;
 	font-weight: 300;
 	${mobile({fontSize: '20px'})}
`
const Form = styled.form` 
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`
const InputWrapper = styled.div`
	flex: 1;
	text-align: center;
`
const Input = styled.input`
	min-width: 80%;
	margin: 10px;
	padding: 12px;
`
const Agreement = styled.span`
 	font-size: 14px;
 	margin: 15px 0px;
`
const ErrorMessage = styled.div`
	font-size: 12px;
	color: #E41B17;
	text-align: center;
`
const Button = styled.button`
	min-width: 50%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	cursor: pointer;
	margin-bottom: 10px;
	font-size: 20px;
	transition: all .5 ease;
	color: ghostwhite;
	&:hover {
		background-color: darkcyan;
	}
	&:active {
		background-color: cyan;
	}
`
const Register: FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const formik = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			username: '',
			email: '',
			password: '',
			confirmPassword: ''
		},
		validationSchema: Yup.object({
			name: Yup.string()
			.min(3, 'Must be 3 characters or more')
			.max(15, 'Must be 15 characters or less')
			.required('Required'),
			lastName: Yup.string()
			.min(3, 'Must be 3 characters or more')
			.max(20, 'Must be 20 characters or less')
			.required('Required'),
			username: Yup.string()
			.min(6, 'Must be 3 characters or more')
			.max(15, 'Must be 15 characters or less')
			.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string().min(8, 'Must be 8 characters or more').required('Password is required'),
  			confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
		}),
		onSubmit: values => {
			setIsLoading(true);
			axios({
			  method: 'post',
			  url: '/user/12345',
			  data: {
			    firstName: 'Fred',
			    lastName: 'Flintstone'
			  }
			}).then( () => {
				toast.success('Thanks for joining us', {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setIsLoading(false);
			}).catch( () => {
				toast.error('Something went wrong', {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setIsLoading(false);
			})
   }});

	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form onSubmit={formik.handleSubmit}>
					<InputWrapper>
						<Input 
							type='text'
							name="name"
							placeholder='Name'
							value={formik.values.name}
							onChange={formik.handleChange}
						/>
						{formik.errors.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
					</InputWrapper> 
					<InputWrapper>
						<Input 
							type='text'
							name="lastName"
							placeholder='Last name'
							value={formik.values.lastName}
							onChange={formik.handleChange}
						/>
						{formik.errors.lastName ? <ErrorMessage>{formik.errors.lastName}</ErrorMessage> : null}
					</InputWrapper>
					<InputWrapper>
						<Input
							type='text'
							name="username"
							placeholder='Username'
							value={formik.values.username}
							onChange={formik.handleChange}
						/>
						{formik.errors.username ? <ErrorMessage>{formik.errors.username}</ErrorMessage> : null}
					</InputWrapper>
					<InputWrapper>
						<Input
							id="email"
							type='text'
							name="email"
							placeholder='Email'
							value={formik.values.email}
							onChange={formik.handleChange}
						/>
						{formik.errors.email ? <ErrorMessage>{formik.errors.email}</ErrorMessage> : null}
					</InputWrapper>
					<InputWrapper>
						<Input
							type='password'
							name="password"
							placeholder='Password'
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
						{formik.errors.password ? <ErrorMessage>{formik.errors.password}</ErrorMessage> : null}
					</InputWrapper>
					<InputWrapper>
						<Input 
							type='password'
							name="confirmPassword"
							placeholder='Confirm password'
							value={formik.values.confirmPassword}
							onChange={formik.handleChange}
						/>
						{formik.errors.confirmPassword ? <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage> : null}
					</InputWrapper>
					<Agreement>
						By clicking submit you agree to the terms and conditions -
						<b> PRIVACY POLICY</b>
					</Agreement>
					<Button disabled={isLoading} type="submit" >Create</Button>
				</Form>
			</Wrapper>
		</Container>
	)
}

export default Register;	