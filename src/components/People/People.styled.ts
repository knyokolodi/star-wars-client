import { Card } from 'react-bootstrap';
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

export const StyledPagination = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const StyledPaginationButton = styled.button`
  background-color: #2d2c2c;
  color: #ccc;
  border: solid 1px #2d2c2c;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 10px;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
    color: #1f1f1f;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #999999;
    color: #666666;
  }
`;

export const StyledSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
