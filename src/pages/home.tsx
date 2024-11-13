import { Suspense } from "react";
import Page from "./pokemon";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* <Suspense fallback={<Loading />}>
        <Page />
      </Suspense> */}
    </div>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
