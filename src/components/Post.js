import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  console.log(post);

  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/cheese/${post.id}`}>
        <h1>{post.name}</h1>
      </Link>
      <h2>{post.origin_country}</h2>
      <h2>{post.type}</h2>
    </div>
  );
};

export default Post;