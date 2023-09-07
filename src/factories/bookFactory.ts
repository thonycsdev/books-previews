import { BookService } from "@/services/bookService";

export function bookFactory() {
  const bookService = new BookService();
  return { bookService };
}
