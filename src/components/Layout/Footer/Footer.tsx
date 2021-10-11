import { Container, Row, Col } from 'react-bootstrap';

import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter className='fixed-bottom'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Kagiso Nyokolodi SovTech Assesment
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
