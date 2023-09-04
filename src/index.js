import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { QueryClient, QueryClientProvider } from "react-query";

import authStore from "./store/auth";
import App from "./App";

import "./style/index.scss";
import "./style/custom-bootstrap.scss";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider authStore={authStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);


reportWebVitals();
