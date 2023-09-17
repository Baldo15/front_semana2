import { useEffect, useState } from "react";

import { getPosts } from "../services/posts-service";
import Post from "./post";

const initialState = [];

function ListarPosts({search}) {
  const [posts, setPosts] = useState(initialState);

  useEffect(() => {
    getPosts().then((posts) => {
        setPosts(posts);
    });
  }, []);

  return (
    <div className="d-flex flex-wrap p-5">
      {posts === initialState
        ? "Loading..."
        : posts
        .filter((e) => e.aut.includes(search))
        .map((post) => (
              <Post
                key={post.id}
                imagen={post.img}
                tiempo={post.tie}
                autor={post.aut}
                texto={post.tex}
                comentarios={post.com}
              />
            ))}
    </div>
  );
}

export default ListarPosts;
