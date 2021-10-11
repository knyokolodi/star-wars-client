import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #2d2c2c;
  background-clip: border-box;
  border: 1px solid #2d2c2c;
  border-radius: 0 !important;
  color: #fff;
  align-items: center;
  padding: 20px 30px;
  margin-bottom: 20px;
`;

export const StyledCardTitle = styled.h4`
  color: #ccc;
`;

export const StyledCardImage = styled.img`
  border-radius: 50%;
  width: 100px;
  margin-bottom: 20px;
`;

export const StyledCardLink = styled(Link)`
  background-color: #1f1f1f;
  color: #ccc;
  border: solid 1px #1f1f1f;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 10px;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
    color: #1f1f1f;
  }
`;
