import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 200px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 4px;

  background-color: ${(props) => props.theme['green-500']};
`
