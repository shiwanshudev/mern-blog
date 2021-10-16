import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "../components/Blog";

export default function BlogList() {
  const [blogsArr, setBlogsArr] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URI);
      setBlogsArr(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      {blogsArr.map((obj) => (
        <Blog
          key={obj._id}
          title={obj.title}
          description={obj.description}
          time={obj.time}
          id={obj._id}
        />
      ))}
      <footer style={{ padding: "25px", textAlign: "center", color: "gray" }}>
        &copy; Shiwanshu 2021
      </footer>
    </div>
  );
}
