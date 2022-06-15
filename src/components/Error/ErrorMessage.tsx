import styled from 'styled-components';
import ErrorPicture from './ErrorPicture.jpg';
//react-router
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  text-align: center;
`
const Image = styled.img`
  width: 30%;
  height: 100%;
`
const Text = styled.div`
  font-size: 30px;
  cursor: pointer;
  transition: all .3s ease;
  &:hover {
    text-decoration: underline;
    color: grey;
  }
  &:active {
    color: teal;
  }
`

const ErrorMessage = () => {
  let navigate = useNavigate();

  const onGoHomePage = () => {
    navigate(`/`);
		window.scrollTo(0, 0);
  } 

  return (
    <Container>
        <Image src={ErrorPicture}/>
        <Text onClick={onGoHomePage}>Go to home</Text>
    </Container>
  )
}

export default ErrorMessage;