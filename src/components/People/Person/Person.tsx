import { Col } from 'react-bootstrap';
import { IPersonProps } from '../../../interfaces/IPerson';
import { StyledCard, StyledCardTitle, StyledCardImage } from './Person.styled';

const Person = ({ person: { name, gender, height, homeworld, mass } }: IPersonProps) => {
  return (
    <Col md={3}>
      <StyledCard>
        <StyledCardImage src='/blank-profile.png' alt='Star Wars Client' />
        <StyledCardTitle>{name}</StyledCardTitle>
        <span>{gender}</span>
        <span>{height}</span>
        <span>{homeworld}</span>
        <span>{mass}</span>
      </StyledCard>
    </Col>
  );
};

export default Person;
