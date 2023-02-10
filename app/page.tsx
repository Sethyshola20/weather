import Weather from "./weather";

export default function Home() {
  const apiKeyc = process.env.API_KEYC!;
  const apiKeyw = process.env.API_KEYW!;
  return <Weather apiKeyc={apiKeyc} apiKeyw={apiKeyw} />;
}
