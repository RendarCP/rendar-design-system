import styled from "@emotion/styled";

interface CardContentProps {
  children: React.ReactNode;
}

export default function CardContent({ children, ...props }: CardContentProps) {
  return <CardContentContainer {...props}>{children}</CardContentContainer>;
}

const CardContentContainer = styled.div``;
