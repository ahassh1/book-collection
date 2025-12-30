import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    image,
    rating,
    bookId,
    bookName,
    publisher,
    category,
    yearOfPublishing,
  } = singleBook;
  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="card w-96 rounded-xl p-4 shadow-lg border border-gray-300">
        <figure className="p-4 bg-sky-50 w-2/3 mx-auto rounded-xl">
          <img className="h-[168px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{bookName.slice(0, 30)}</h2>
            <h1 className="badge badge-secondary">{yearOfPublishing}</h1>
          </div>
          <p className=" text-gray-500 font-semibold">Book by: {publisher}</p>
          <div className="border-t-1 border-dashed border-gray-500"></div>
          <div className="card-actions justify-end">
            <div className="badge ">{category}</div>
            <div className="badge">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
