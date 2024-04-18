import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserStore from "./context/UserStore";
import ProjectStore from "./context/ProjectStore";
import { Provider } from "react-redux";
import { store } from './store/store';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <UserStore>
        <ProjectStore>
          <App />
        </ProjectStore>
      </UserStore>
    </Provider>
  </BrowserRouter>
);
