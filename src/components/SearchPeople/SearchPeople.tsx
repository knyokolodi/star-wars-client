import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { Container, Row, Spinner } from 'react-bootstrap';

import Person from '../People/Person/Person';

import { SEARCH_PEOPLE } from '../../graphql/Queries';
import { ISearchPeopleResponse, ISearchPeopleVars } from '../../interfaces/IPeople';
import { ISearchParams } from '../../interfaces/ISearchParams';

const SearchPeople = () => {
  const { name } = useParams<ISearchParams>();

  const { error, loading, data } = useQuery<ISearchPeopleResponse, ISearchPeopleVars>(
    SEARCH_PEOPLE,
    {
      variables: { name: name },
    }
  );

  return (
    <Container className='mt-3 mb-5'>
      <Row>
        {loading && <Spinner animation='grow' variant='secondary' />}
        {data?.searchPeople.people &&
          data?.searchPeople.people.map((person, index) => {
            return <Person key={index} person={person} />;
          })}
        {error && <h3 className='text-danger text-center'>{error}</h3>}
        {data?.searchPeople.people.length === 0 && (
          <h3 className='text-danger text-center'>Ooop! No Records Found for {name}</h3>
        )}
      </Row>
    </Container>
  );
};

export default SearchPeople;
