import React from "react";
import BookCard from "./BookCard";

interface Props {
  books: Book[];
  containerClassName?: string;
}

const SimiliarBooks = ({ books, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h3>More similiar books</h3>
      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default SimiliarBooks;
