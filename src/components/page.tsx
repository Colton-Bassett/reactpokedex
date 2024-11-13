import { use } from "react";

export default function Page() {
  const response = use(
    fetch(`https://pokeapi.co/api/v2/pokemon/1/`).then((res) => res.json()),
  );
  console.log(response);

  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}