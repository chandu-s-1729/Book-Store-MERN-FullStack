import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://book-store-mern-backend-m255.onrender.com/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error is occurred. Please check the console.");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(
        `https://book-store-mern-backend-m255.onrender.com/books/${id}`,
        data
      )
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error occurred. Please check console.");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> Edit Book </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-grey-500"> Title </label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-grey-500"> Author </label>
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-grey-500"> Publish Year </label>
          <input
            type="number"
            value={publishYear}
            onChange={(event) => setPublishYear(event.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8 rounded-lg"
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
