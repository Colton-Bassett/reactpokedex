import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";
import Admin from "./pages/admin";

import styles from "./App.module.css";
import Help from "./pages/help";
import Disclaimer from "./pages/disclaimer";

// TODO implement error handling for use API
// Read React 19 docs

function App() {
  return (
    <Box className={styles.container}>
      <Nav />
      <Box component="main" className={styles.main}>
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
          <Route path="/help" element={<Help />}></Route>
          <Route path="/disclaimer" element={<Disclaimer />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
