import { Suspense } from "react";
import "./App.css";
import Page from "./components/page";

// async function mockSlowRequest(): Promise<string> {
//   const response = await new Promise<string>((resolve) => {
//     // Simulate a delay of 2 seconds (2000 milliseconds)
//     setTimeout(() => {
//       resolve("Data retrieved after a slow request!");
//     }, 2000);
//     console.log("mockSlowRequest");
//   });
//   return response;
// }

function App() {
  return (
    <>
      <div></div>
      <Suspense fallback={<Loading />}>
        <Page></Page>
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default App;
