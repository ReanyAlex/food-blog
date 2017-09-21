import styled from 'styled-components';

const Nav = styled.nav`
  min-width: 320px;
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  background-color: firebrick;
  border-color: black;
`;

const HeaderItem = styled.span`
  color: white;
  font-size: 1.25rem;
  padding-left: 10px;

  &:hover {
    color: gold;
  }
`;

const HeaderLogo = styled.span`
  padding-left: 0.5rem;
  color: gold;
  font-size: 1.25rem;

  &:hover {
    color: white;
  }

  @media only screen and (min-width: 576px) {
    font-size: 1.75rem;
  }
`;

const LastHeaderItem = styled.li`padding-right: 2rem;`;
export { Nav, HeaderLogo, LastHeaderItem, HeaderItem };
