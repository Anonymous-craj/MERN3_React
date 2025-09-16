import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export const SingleBlog = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});

  const { id } = useParams();

  const fetchSingleBlog = async () => {
    const response = await axios.get("http://localhost:3000/blog/" + id);
    setBlog(response.data.data);
  };

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  const deleteBlog = async () => {
    const response = await axios.delete("http://localhost:3000/blog/" + id);
    if (response.status === 200) {
      alert("Blog deleted successfully");
      navigate("/");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-full mt-[70px]"
            src={blog.image}
            alt="Product Image"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-medium mb-2">{blog.title}</h3>
          <span class="text-black">{blog.subtitle}</span>
          <p className="text-gray-600 text-sm mt-1 mb-4">{blog.description}</p>
          <div className="flex items-center justify-between">
            <Link to={`/edit/${id}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Edit
              </button>
            </Link>
            <button
              onClick={deleteBlog}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
