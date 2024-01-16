import styled from "@emotion/styled";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children, ...props }: CardProps) {
  return <CardConatiner {...props}>{children}</CardConatiner>;
}

Card.Header = CardHeader;
Card.Content = CardContent;

const CardConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 8px;
`;
