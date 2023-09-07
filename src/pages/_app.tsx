import Header from "@/components/Header/Header";
import { BookContextProvider } from "@/hooks/Contexts/BooksContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BookContextProvider>
        <Header />
        <Component {...pageProps} />
      </BookContextProvider>
    </>
  );
}
