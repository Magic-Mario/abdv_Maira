import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="text-blue-500">app</div>
    </Provider>
  );
}

export default App;
