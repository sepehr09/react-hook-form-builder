import FormBuilderProvider from "../components/formBuilderProvider";
import { elements } from "./constants";
import ExampleAppHomePage from "./exampleAppHomePage";

function App() {
  return (
    <FormBuilderProvider elements={elements}>
      <div className="App">
        <ExampleAppHomePage />
      </div>
    </FormBuilderProvider>
  );
}

export default App;
