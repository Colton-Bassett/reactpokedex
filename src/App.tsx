import { Suspense } from "react";
import "./App.css";
import Pokemon from "./pages/pokemon";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

// TODO implement error handling for use API
// Read React 19 docs

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/pokemon"
        element={
          <Suspense fallback={<Loading />}>
            <Pokemon />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
}

export default App;

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
