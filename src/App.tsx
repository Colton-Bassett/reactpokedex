import { Suspense } from "react";
import "./App.css";
import Page from "./components/page";

// TODO implement error handling for use API
// Read React 19 docs

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Page></Page> */}
        <div>Placeholder</div>
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default App;
