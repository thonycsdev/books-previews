import { bookFactory } from "@/factories/bookFactory";
import { Book } from "@/models/book";
import { useEffect, useState } from "react";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookName, setBookName] = useState<string>("harry potter");
  const { bookService } = bookFactory();
  useEffect(() => {
    bookService.getBookByName(bookName).then((books) => setBooks(books));
  }, [bookName]);
  return { books, setBookName };
}
