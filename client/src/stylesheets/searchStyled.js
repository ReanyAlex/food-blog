import styled from 'styled-components';

const HeaderTitle = styled.div`
  width: 66%;
  display: inline-block;
  padding: 0;
  margin: 0;
  font-size: 2rem;
`;

const SearchForm = styled.form`
  width: 100%;
  float: right;
  display: inline-block;
  padding-top: 0.25rem;

  @media only screen and (min-width: 768px) {
    width: 33%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
`;

export { HeaderTitle, SearchForm, SearchInput };
