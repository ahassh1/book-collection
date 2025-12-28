import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
  const { image, rating, bookName, review, category } = singleBook;
  return (
    <div>
      <div className="card w-96 rounded-xl p-4 shadow-lg border border-gray-300">
        <figure className="p-4 bg-sky-50 w-2/3 mx-auto rounded-xl">
          <img className="h-[168px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName.slice(0, 20)}...
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{review.slice(0, 50)}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
