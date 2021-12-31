import { useState } from "react";
import "./App.css";
import { useFetchCommentsQuery } from "./features/comments/commentsApiSlice";

function App() {
  const [postID, setPostID] = useState(1);
  const { data = [], isFetching } = useFetchCommentsQuery(postID);

  if (isFetching)
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="App">
      <div>
        <select
          value={postID}
          onChange={(e) => setPostID(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        {data.map((comment) => (
          <div
            key={comment.id}
            style={{ border: "1px solid black", margin: "1rem" }}
          >
            <p>PostID: {comment.postId}</p>
            <p>
              {comment.name} | {comment.email}
            </p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
