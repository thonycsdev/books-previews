import { bookFactory } from "@/factories/bookFactory";
import { Book } from "@/models/book";
import { useEffect, useState } from "react";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookName, setBookName] = useState<string>("");
  const { bookService } = bookFactory();

  useEffect(() => {
    bookService
      .getBookByName(bookName)
      .then((books) => setBooks(books))
      .catch(() => []);
  }, [bookName]);
  return { books, setBookName };
}
