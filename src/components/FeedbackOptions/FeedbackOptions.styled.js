import { styled } from 'styled-components';
export const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: 140px;
  border-radius: 20px;
  color: #3c373e;
  transition: 0.2s linear;
  font-size: 20px;
  outline: 2px solid rgba(255, 255, 255, 0.4);

  &:hover {
    box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 1);
    color: black;
  }

  ${props => {
    switch (props.type) {
      case 'good':
        return `background-color: #addc40`;
      case 'neutral':
        return `background-color: #57a7af`;
      case 'bad':
        return `background-color: #fd9cbc`;
      default:
        return null;
    }
  }}
`;
