import { FC } from 'react';
//
import SpinnerGiF from './SpinnerGif.gif';
//style
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Image = styled.img`
`

const Spinner: FC = () => {
  return (
    <Container>
        <Image src={SpinnerGiF}/>
    </Container>
  )
}

export default Spinner;