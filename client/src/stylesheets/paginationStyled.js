import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const PaginationIndex = styled.span`
  background-color: firebrick;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: gold;
    color: black;
  }
`;

const PaginationIndexCurrent = styled.span`
  background-color: gold;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  color: firebrick;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export { Container, PaginationIndex, PaginationIndexCurrent };
