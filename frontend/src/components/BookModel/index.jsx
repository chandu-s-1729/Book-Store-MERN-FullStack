import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4"> Why this Book Store? </p>
        <p className="mt-2">
          Our bookstore is a haven for book lovers, offering a wide collection
          of genres ranging from fiction, non-fiction, classics, and self-help
          to contemporary novels. It’s a space where stories come alive,
          fostering a love for reading among all age groups. With comfortable
          reading corners and a curated selection, it’s the perfect spot to
          discover your next favorite book. Our knowledgeable staff is always
          available to help you find the right read for your mood or interest.
          Whether you're seeking inspiration, adventure, or knowledge, our
          bookstore is here to guide your literary journey.
        </p>
      </div>
    </div>
  );
};

export default BookModel;
