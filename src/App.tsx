import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";
import Admin from "./pages/admin";
import Help from "./pages/help";
import Disclaimer from "./pages/disclaimer";

import styles from "./App.module.css";

function App() {
  return (
    <Box className={styles.container}>
      <Nav />
      <Box component="main" className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pokemon/:id" element={<Pokemon />}></Route>
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
