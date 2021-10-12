import { Link } from "react-router-dom";

export default function Blog(props) {
  const { title, description, time, id } = props;
  return (
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
        {description.length > 200
          ? description.substring(0, 200) + "..."
          : description}
      </p>

      <div style={{ display: "flex" }}>
        <small style={{ color: "gray" }}>{time}</small>
        <div style={{ marginLeft: "auto" }}>
          <Link
            className="btn btn-outline-primary"
            style={{ marginRight: "5px" }}
            to={`/blog/${id}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
