import { Link, useParams } from "react-router-dom";

export default function ViewBlog() {
  const { id } = useParams();
  /* Temp */
  const arrObj = [
    {
      _id: 1,
      title: "First Title",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      _id: 2,
      title: "Second Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices finibus ex in dictum. Proin consequat ligula est. Ut sollicitudin neque sed justo laoreet cursus. Donec sit amet consequat ante, a interdum nisi. Donec porta lorem vitae efficitur congue. Nulla fermentum interdum ligula, vel lacinia mauris consectetur nec. Sed interdum ultricies arcu, eget lacinia eros tempor eu. Vivamus dui leo, blandit eu orci ac, faucibus volutpat ante. Nullam ultricies massa ac nibh aliquet, ut suscipit ipsum tempus. Aliquam eget aliquam nibh, vitae malesuada orci. Curabitur nec egestas lectus, eu tincidunt neque. Quisque sapien leo, faucibus tristique tempor sed, molestie quis ligula. Aliquam tristique, purus non elementum fermentum, enim nisi cursus tellus, eget efficitur tortor nisi sit amet odio. ",
      time: "1 June 2021",
    },
    {
      _id: 3,
      title: "Third Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices finibus ex in dictum. Proin consequat ligula est. Ut sollicitudin neque sed justo laoreet cursus. Donec sit amet consequat ante, a interdum nisi. Donec porta lorem vitae efficitur congue. Nulla fermentum interdum ligula, vel lacinia mauris consectetur nec. Sed interdum ultricies arcu, eget lacinia eros tempor eu. Vivamus dui leo, blandit eu orci ac, faucibus volutpat ante. Nullam ultricies massa ac nibh aliquet, ut suscipit ipsum tempus. Aliquam eget aliquam nibh, vitae malesuada orci. Curabitur nec egestas lectus, eu tincidunt neque. Quisque sapien leo, faucibus tristique tempor sed, molestie quis ligula. Aliquam tristique, purus non elementum fermentum, enim nisi cursus tellus, eget efficitur tortor nisi sit amet odio. ",
      time: "1 June 2021",
    },
  ];
  const foundBlog = arrObj.find((blogObj) => blogObj._id == id);
  console.log(foundBlog);
  const { title, description, time } = foundBlog;
  // Temp
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
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
