import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "../public/styles/reset.css"
import "../public/styles/fonts.css"
import "../public/styles/variables.css"
import "../public/styles/defaults.css"
import "../public/styles/helpers.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
