
import "./App.css";
import MyRoutes from "./MyRoutes";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MyRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
