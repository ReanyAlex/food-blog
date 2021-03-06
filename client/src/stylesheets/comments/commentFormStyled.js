import styled from 'styled-components';

const Form = styled.form`
  min-width: 320px;
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
  float: left;
  width: 100%;
  background-color: whiteSmoke;
  padding: 1rem 0 1rem 1rem;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  float: left;
  width: 100%;
`;
const Span = styled.span`
  float: left;
  width: 27%;

  @media only screen and (min-width: 576px) {
    width: 22%;
  }

  @media only screen and (min-width: 768px) {
    width: 20%;
  }
`;
const AuthorInput = styled.input`
  float: left;
  width: 65%;
`;

const CommentInput = styled.textarea`
  float: left;
  width: 65%;
`;

const Button = styled.button`
  font-size: 1rem;
  height: 40px;
  text-align: center;
  width: 80%;
  border-radius: 40px;
  background: #fff;
  border: 2px solid gold;
  cursor: pointer;
  transition: all 0.25s ease;
  margin: 0.5rem auto;
  display: block;

  &:hover {
    color: white;
    background: firebrick;
    border: 1px solid black;
  }
  @media only screen and (min-width: 768px) {
    margin: 1rem 0.625rem 2rem 0;
    float: ${props => (props.float ? props.float : 'none')};
    width: 200px;
  }

<<<<<<< HEAD
  @media only screen and (min-width: 1200px) {
    width: 250px;
=======
  @media only screen and (min-width: 990px) {
    width: 200px;
>>>>>>> 886cc49a2a8c1997a49e4998fe8a34eef319d976
  }
`;

const SubmitInput = styled.input`display: none;`;

export { Form, InputContainer, Span, AuthorInput, CommentInput, Label, Button, SubmitInput };
