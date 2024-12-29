import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          {/* max-md: hidden */}
          <th className="border border-slate-600 rounded-md ">Author</th>
          <th className="border border-slate-600 rounded-md">Publish Year</th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4 ">
                <Link to={`/books/details/${book._id}`}>
                  <div className="group relative flex justify-center">
                    <BsInfoCircle className="text-2xl text-green-800" />
                    <span className="absolute top-10 z-10 scale-0 rounded bg-gray-500 p-4 text-xs text-white group-hover:scale-100">
                      Book Details
                    </span>
                  </div>
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <div className="group relative flex justify-center">
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                    <span className="absolute top-10 z-10 scale-0 rounded bg-gray-500 p-4 text-xs text-white group-hover:scale-100">
                      Edit Book
                    </span>
                  </div>
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <div className="group relative flex justify-center">
                    <MdOutlineDelete className="text-2xl text-red-600" />
                    <span className="absolute top-10 z-10 scale-0 rounded bg-gray-500 p-4 text-xs text-white group-hover:scale-100">
                      Delete Book
                    </span>
                  </div>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
