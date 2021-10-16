import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
export default function EditBlog() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    fetchBlog();
  }, []);
  const fetchBlog = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URI}/${id}`);

    setTitle(response.data.title);
    setDesc(response.data.description);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${process.env.REACT_APP_API_URI}/update/${id}`,
      {
        title,
        description,
      }
    );
    console.log(response);
    history.push("/");
  };
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title Here"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            required
            value={description}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
