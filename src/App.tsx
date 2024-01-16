import { useRef } from "react";
import { View } from "./compoennt/View";
import Card from "./compoennt/Card/Card";

function App() {
  const ref = useRef<HTMLButtonElement>();
  return (
    <>
      <View ref={ref} component="button">
        테스트
      </View>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card>
          <Card.Header>카드헤더입니다</Card.Header>
          <Card.Content>내용부분이 괜찮나요?</Card.Content>
        </Card>
      </div>
    </>
  );
}

export default App;
