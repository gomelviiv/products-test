import { Provider } from "react-redux";
import HomeContainer from "./pages/Home/HomeContainer";
import { store } from "./redux/store";

import "./styles/style.css";

function App() {
  return (
    <Provider store={store}>
      <HomeContainer />
    </Provider>
  );
}

export default App;
