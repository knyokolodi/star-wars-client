import { IPerson } from './IPerson';

export interface GetPeople {
  next: string;
  people: IPerson[];
}

export interface IPeopleResponse {
  getPeople: GetPeople;
}

export interface IPeopleVars {
  page: number;
}

export interface ISearchPeopleVars {
  name: string;
}

export interface ISearchPeopleResponse {
  searchPeople: GetPeople;
}
