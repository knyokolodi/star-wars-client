import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Container, Row, Spinner } from 'react-bootstrap';

import Person from './Person/Person';

import { GET_PEOPLE } from '../../graphql/Queries';
import { IPeopleResponse, IPeopleVars } from '../../interfaces/IPeople';

import { StyledPagination, StyledPaginationButton, StyledSpinnerContainer } from './People.styled';

const People = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {}, [currentPage]);

  const { error, loading, data } = useQuery<IPeopleResponse, IPeopleVars>(GET_PEOPLE, {
    variables: { page: currentPage },
  });

  return (
    <Container className='mt-3 mb-5'>
      <Row>
        {loading && (
          <StyledSpinnerContainer>
            <Spinner animation='grow' variant='secondary' className='align-self-center' />
          </StyledSpinnerContainer>
        )}
        {data?.getPeople.people &&
          data?.getPeople.people.map((person, index) => {
            return <Person key={index} person={person} />;
          })}
        {error && <h3 className='text-danger'>{error}</h3>}
      </Row>
      {!loading && (
        <StyledPagination>
          <StyledPaginationButton
            onClick={(e) => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1 ? true : undefined}
          >
            Prev
          </StyledPaginationButton>
          <StyledPaginationButton
            onClick={(e) => setCurrentPage(currentPage + 1)}
            disabled={data?.getPeople.next === null ? true : undefined}
          >
            Next
          </StyledPaginationButton>
        </StyledPagination>
      )}
    </Container>
  );
};

export default People;
