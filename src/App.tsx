import { Provider } from "react-redux";
import Form from "./components/Form";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./redux/store";

function App() {
  const persistor = persistStore(store);
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Toaster />
          <div id="modal"></div>
          <div className="h-screen w-screen flex flex-col gap-10" id="root">
            <Header />
            <Form />
            <TaskList />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
