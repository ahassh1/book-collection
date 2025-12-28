import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);
  // useEffect(() => {
  //   fetch("booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllBooks(data);
  //     });
  // });

  // const bookPromise = fetch("./booksData.json").then((res) => res.json());
  return (
    <div>
      <h1 className="p-6 text-center text-3xl font-bold">Books</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 md:space-y-4 gap-4 justify-items-center">
          {data.map((singleBook) => (
            <Book singleBook={singleBook} key={singleBook.bookId}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
