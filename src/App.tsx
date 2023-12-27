import "./App.css";
import { Text } from "./polymorphic/Text";

function App() {
  return (
    <div className="App">
      <Text as="h1" size="lg">
        Custom Heading
      </Text>
      <Text as="p" size="md">
        Custom Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Custom Label
      </Text>
    </div>
  );
}

export default App;
