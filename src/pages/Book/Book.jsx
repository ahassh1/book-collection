import React, { use } from "react";

const Book = ({ bookPromise }) => {
  const data = use(bookPromise);
  console.log(data);
  return <div>Book</div>;
};

export default Book;
