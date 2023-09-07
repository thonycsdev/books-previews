import { Book } from "@/models/book";
import Image from "next/image";
import React from "react";

type BookCardProps = {
  book: Book;
};

function BookCard(props: BookCardProps) {
  const { book } = props;
  const bookImage = book.volumeInfo.imageLinks?.thumbnail
    ? book.volumeInfo.imageLinks.thumbnail
    : "/bookDefault.jpg";
  return (
    <li
      className="w-80 h-fit bg-slate-200 rounded-3xl
      m-8 text-center transition-all delay-100 hover:scale-110"
    >
      <div className="flex items-center flex-col p-5 gap-2">
        <Image
          width={100}
          height={100}
          src={bookImage}
          alt={book.volumeInfo.title}
          className="mb-auto mt-9 rounded-xl"
        />
        <div className="font-bold">{book.volumeInfo.title}</div>
        <div>
          {book.volumeInfo.authors.map((author) => (
            <div key={author} className="font-thin">
              {author}
            </div>
          ))}
        </div>
        <div className="font-semibold">
          {new Date(book.volumeInfo.publishedDate).getFullYear()}
        </div>
      </div>
    </li>
  );
}

export default BookCard;
