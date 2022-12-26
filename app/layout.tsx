import Head from "./head";
import CityContextProvider from "../context/CityContextProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head></Head>
      <body>
        <CityContextProvider>{children}</CityContextProvider>
      </body>
    </html>
  );
}
