import { MouseEventHandler, ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { Form } from 'react-bootstrap';

import { StyledFormControl, StyledButton } from './SearchBar.Styled';

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');

  const history = useHistory();

  const searchMovieHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    history.push(`/search/${search}`);
  };

  return (
    <Form className='d-flex'>
      <StyledFormControl
        type='search'
        placeholder='Persons Name'
        className='mr-2'
        aria-label='Search'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
      <StyledButton variant='outline-success' onClick={searchMovieHandler}>
        Search
      </StyledButton>
    </Form>
  );
};

export default SearchBar;
