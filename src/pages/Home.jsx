import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blog");
    setBlogs(response.data.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log(blogs);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap mt-3 justify-evenly gap-2">
        {blogs.map((blog) => {
          return <Cards blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Home;
