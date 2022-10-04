import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imageToAdd from "../assets/images/blog.png";
interface IHeaderProps{

}

const Header:React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar bg="danger" variant="danger" fixed="top" className='text-white'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={imageToAdd}
              width="60"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <b className='text-white'>Byte-Bot</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Header;