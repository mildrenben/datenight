import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
	text-transform: uppercase;
	font-size: 0.8em;
	letter-spacing: 1px;
	padding: 1.2em 1.8em;
	text-decoration: none;
	border-radius: 4px;
	cursor: pointer;
	outline: none;
	box-shadow: none;
  border: none;
	border: solid 1px rgba(0,0,0,0.15);
	background: none;

  &:hover {
    border-color: rgba(0,0,0,0.35);
  }
`

export default Button