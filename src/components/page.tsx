type Props = {
  response: Promise<string>;
};

export default function Page({ response }: Props) {
  const data = response;
  console.log("page function");

  return (
    <div>
      <div>{data}</div>
    </div>
  );
}
