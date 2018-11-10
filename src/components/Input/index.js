import styled from 'styled-components'

const Input = styled.input`
  display: block;
  font-size: 0.8em;
  line-height: 150%;
  border-radius: 0.2em;
  border: solid 1px rgba(0,0,0,0.15);
  padding: 0.5em 1em;
  transition: border-color 0.1s ease;

  &:focus {
    outline: none;
    box-shadow: none;
    border-color: #2196f3;
  }
`

export default Input