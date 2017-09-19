import styled from 'styled-components';

const Button = styled.button`
  display: block;
  margin-top: 5rem;
`;

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 120px;
  padding-bottom: 20px;
`;

const Span = styled.span`
  position: absolute;
  left: 0;
  width: 90px;
`;

const Input = styled.input`font-size: 1.5rem;`;

const TextArea = styled.textarea`font-size: 1.5rem;`;

export { Button, Label, Span, Input, TextArea };
