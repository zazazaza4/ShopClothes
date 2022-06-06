import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from "react-router-dom";
import { MailOutlineIcon } from '@mui/icons-material';
import {mobile, landscapeTablets} from '../responsive';

const Container = styled.div`
	height: 35px;
	font-size: 16px;
	color: white;
	background-color: teal;
`
const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 5px 10px;
`

const Left = styled.div`
	display: flex;
	align-items: center; 
	gap: 20px;
	${landscapeTablets({display: 'none'})}
`
const LeftSm = styled.div`
	display: none;
	align-items: center; 
	gap: 20px;
	cursor: pointer;
	${landscapeTablets({display: 'flex'})}
	a {
		color: white;
		font-weight: 600;
		&:hover {
	      color: darkgray;
	   }
	}
`
const Center = styled.div`
	display: flex;
	align-items: center; 
	gap: 20px
`
const Right = styled.div`
	display: flex;
	align-items: center; 
	gap: 20px;
	${landscapeTablets({display: 'none'})}
`
const Item = styled(Center)`
	gap: 8px;
`

const Announcement = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Item>
						<EmailIcon/>
						6715414@gmail.com
					</Item>
				</Left>
				<LeftSm>
					<Item style={{fontWeight: 'bold',fontSize: '24px',}}>
						 <Link to="/">DROP.</Link>
					</Item>
				</LeftSm>
				<Center>
					<Item>
						FREE on orders of $50 or more
					</Item>
				</Center>
				<Right>
					<Item>
						<PhoneIcon/>
						+38066034232
					</Item>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Announcement;