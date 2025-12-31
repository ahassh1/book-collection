import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );

    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sortedByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPages);
    }

    if (type === "rating") {
      const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort by: {sort ? sort : "Select"}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <button onClick={() => handleSort("pages")}>Pages</button>
          </li>
          <li>
            <button onClick={() => handleSort("rating")}>Rating</button>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read</h2>
          {readList.map((book) => (
            <Book key={book.bookId} singleBook={book} />
          ))}
        </TabPanel>

        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
