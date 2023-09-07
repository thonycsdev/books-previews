import { Book } from "@/models/book";
import axios from "axios";

export class BookService {
  private apiURL: string = "https://www.googleapis.com/books/v1/volumes?";
  private params: URLSearchParams = new URLSearchParams();
  constructor() {}

  async getBookByName(bookName: string) {
    if (!this.params.get("q")) {
      this.params.append("q", bookName);
    }
    const urlWithParams = `${this.apiURL}${this.params.toString()}`;
    return await axios
      .get(urlWithParams)
      .then((response) => response.data.items as Book[]);
  }
}
