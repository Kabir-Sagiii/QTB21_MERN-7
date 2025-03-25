import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import mystore from "./redux/store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={mystore}>
      <App />
    </Provider>
  </BrowserRouter>
);

// const root = createRoot(document.getElementById("root"));

// root.render(<p>Hello I am Para</p>);
