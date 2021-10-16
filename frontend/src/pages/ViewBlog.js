import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ViewBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [time, setTime] = useState("");
  const history = useHistory();
  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URI}/${id}`);
    setTitle(response.data.title);
    setTime(response.data.time);
    setDesc(response.data.description);
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URI}/${id}`
      );
      console.log(response);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div
        style={{
          marginTop: "50px",
          border: "1px solid #ddd",
          padding: "25px",
          borderRadius: "5px",
          backgroundColor: "#fff",
        }}
      >
        <h2 className="display-5">{title}</h2>

        <p style={{ fontWeight: 300, fontSize: "18px", lineHeight: 2 }}>
          {description}
        </p>

        <div style={{ display: "flex" }}>
          <small style={{ color: "gray" }}>{time}</small>
          <div style={{ marginLeft: "auto" }}>
            <Link
              className="btn btn-outline-primary"
              style={{ marginRight: "5px" }}
              to={`/blog/edit/${id}`}
            >
              Edit
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
