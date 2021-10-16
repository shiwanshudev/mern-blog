import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URI, {
        title,
        description,
      });
      console.log(response);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
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
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
