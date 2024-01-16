import styled from "@emotion/styled";

interface CardHeaderProps {
  children: React.ReactNode;
}

export default function CardHeader({ children, ...props }: CardHeaderProps) {
  return <CardHeaderContainer {...props}>{children}</CardHeaderContainer>;
}

const CardHeaderContainer = styled.div`
  padding: 5px;
  border-bottom: 1px solid gray;
  /* width: 100%; */
`;
