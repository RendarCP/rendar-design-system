import styled from "@emotion/styled";
import { ReactNode } from "react";

const ButtonContainer = styled.button`
  border: 1px solid gray;
  border-radius: 8px;
  padding: 20px;
`;

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
