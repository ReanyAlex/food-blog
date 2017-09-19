import styled from 'styled-components';

const CommentContainer = styled.div`
  background-color: whiteSmoke;
  border: 1px solid lightgray;
  font-size: 1rem;
  padding: 0.25rem 1rem 0.5rem 1rem;
  margin-bottom: 1rem;
  width: 100%;
  color: darkslategray;

  @media only screen and (min-width: 768px) {
    width: 80%;
  }

  @media only screen and (min-width: 990px) {
    width: 60%;
  }
`;

const AuthorHeader = styled.div`
  padding-top: 0.5rem;
  font-size: 1.25rem;
  font-family: 'Merienda';
`;

const Author = styled.span`
  padding: 0 0 0 0.5rem;
  margin-bottom: 0;
  display: inline-block;
`;

const PostDate = styled.p`
  font-style: italic;
  font-size: 0.85rem;
  margin-bottom: 0;
  padding-top: 0rem;
`;

const Comment = styled.p`
  font-family: Times, 'Times New Roman', Georgia, serif;
  white-space: pre-line;
  font-size: 1.25rem;
  padding-left: 0.75rem;
  margin-bottom: 0;
`;

export { CommentContainer, AuthorHeader, Author, PostDate, Comment };
