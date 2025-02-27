import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./Header.jsx";
createRoot(document.getElementById("root")).render([<App />, <Header />]);

// const root = createRoot(document.getElementById("root"));

// root.render(<p>Hello I am Para</p>);
