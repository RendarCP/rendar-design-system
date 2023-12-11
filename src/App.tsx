import { useRef } from "react";
import { View } from "./compoennt/View";

function App() {
  const ref = useRef<HTMLButtonElement>();
  return (
    <>
      <View ref={ref} component="button">
        테스트
      </View>
    </>
  );
}

export default App;
