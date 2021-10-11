import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { StyledNavbar } from './Header.styled';

import SearchBar from '../../SearchBar/SearchBar';

const Header = () => {
  return (
    <StyledNavbar expand='lg' variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Star Wars Assesment</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
