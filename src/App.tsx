import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./redux/store";
import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/Main";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ErrorPage />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}