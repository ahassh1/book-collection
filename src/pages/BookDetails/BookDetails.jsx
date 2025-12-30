import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;
  const handleMarkAsRead = () => {
    //store with id
    // where to store
    // array or collection
    // if book already exist the show a alert
    // if book not exist then push in the collection or array
    addToStoredDB(id);
  };
  return (
    <div className="w-2/3 mx-auto m-6 bg-sky-50">
      <img className="md:w-48 w-39" src={image} alt="" />
      <h4>Book Name: {bookName}</h4>
      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-info m-3 text-white"
      >
        Read{" "}
      </button>
      <button className="btn btn-success text-white">WishList</button>
    </div>
  );
};

export default BookDetails;
