import { Suspense } from "react";
import "./App.module.css";
import Pokemon from "./pages/pokemon";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav";
import Footer from "./components/footer";

// TODO implement error handling for use API
// Read React 19 docs

function App() {
  return (
    <>
      <Nav />
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
      <Footer />
    </>
  );
}

export default App;

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
