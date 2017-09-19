import styled from 'styled-components';

const Nav = styled.nav`
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  background-color: firebrick;
  border-color: black;
`;

const HeaderItem = styled.li`
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
  font-size: 1.75rem;

  &:hover {
    color: white;
  }
`;

const LastHeaderItem = styled.li`padding-right: 2rem;`;
export { Nav, HeaderLogo, LastHeaderItem, HeaderItem };
