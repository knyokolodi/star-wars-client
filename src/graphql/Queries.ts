import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  query ($page: Int!) {
    getPeople(page: $page) {
      next
      people {
        name
        gender
        height
        mass
        homeworld
      }
    }
  }
`;

export const SEARCH_PEOPLE = gql`
  query ($name: String!) {
    searchPeople(personsName: $name) {
      next
      people {
        gender
        homeworld
        name
        height
        mass
      }
    }
  }
`;
