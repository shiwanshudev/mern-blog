import Blog from "../components/Blog";

export default function BlogList() {
  // Temp
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

  // Temp
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      {arrObj.map((obj) => (
        <Blog
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
