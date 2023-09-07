import { Book } from "@/models/book";
import { createContext } from "react";
import { useBooks } from "../useBooks";
type InitialValueType = {
  books: Book[];
  setBookName: (value: string) => void;
};

const initialValue: InitialValueType = {
  books: [],
  setBookName: () => {},
};

const BooksContext = createContext(initialValue);

type bookContextProvider = {
  children: React.ReactNode;
};

export const BookContextProvider = (props: bookContextProvider) => {
  const { books, setBookName } = useBooks();

  const value: InitialValueType = {
    books: books,
    setBookName: setBookName,
  };
  const { children } = props;
  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default BooksContext;
