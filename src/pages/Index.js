import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import "../styles.scss";

const Index = (props) => {
  const cheese = useLoaderData();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Create a Cheese</h2>
        <Form action="/create" method="post">
          <input type="text" name="name" placeholder="Cheese Name" />
          <input
            type="text"
            name="origin_country"
            placeholder="Country"
          />
          <input type="text" name="type" placeholder="Pair With" />
          <button>Create New Cheese</button>
        </Form>
      </div>
      {cheese.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default Index;