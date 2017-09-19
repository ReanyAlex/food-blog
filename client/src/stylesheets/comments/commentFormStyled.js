import styled from 'styled-components';

const Form = styled.form`
  overflow: auto;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 80%;
  }

  @media only screen and (min-width: 990px) {
    width: 60%;
  }
`;

const InputContainer = styled.div`
  background-color: whiteSmoke;
  padding: 1rem 0 1rem 1rem;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
`;

const AuthorInput = styled.input`width: 90%;`;
const CommentInput = styled.textarea`width: 90%;`;

const Button = styled.button`
  font-size: 1rem;
  height: 40px;
  text-align: center;
  width: 175px;
  border-radius: 40px;
  background: #fff;
  border: 2px solid gold;
  cursor: pointer;
  transition: all 0.25s ease;
  margin: 1rem 0.625rem 2rem 0;

  &:hover {
    color: white;
    background: firebrick;
    border: 1px solid black;
  }
`;

const SubmitInput = styled.input`
  font-size: 1rem;
  height: 40px;
  text-align: center;
  width: 175px;
  border-radius: 40px;
  background: #fff;
  border: 2px solid gold;
  cursor: pointer;
  transition: all 0.25s ease;
  margin: 1rem 0.625rem 2rem 0;
  float: right;

  &:hover {
    color: white;
    background: firebrick;
    border: 1px solid black;
  }
`;

export { Form, InputContainer, AuthorInput, CommentInput, Button, SubmitInput };
