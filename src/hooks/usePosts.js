import React, { createContext, useContext, useReducer, useEffect } from "react";
import getData from "../api/getData";

const PostsContext = createContext();
export const usePosts = () => useContext(PostsContext);
export default function PostsProvider({ children }) {
  const [posts, postsAction] = useReducer(postsReducer, []);

  useEffect(() => {
    getData(
      "http://jsonplaceholder.typicode.com/posts?_expand=user&_embed=comments",
      (data) => postsAction({ type: "set", payload: data })
    );
  }, []);

  function postsReducer(state, { type, payload }) {
    switch (type) {
      case "set": {
        return [...payload];
      }
      default:
        throw new Error("Received wrong action type from dispatch function!");
    }
  }
  return (
    <PostsContext.Provider value={{ posts, postsAction }}>
      {children}
    </PostsContext.Provider>
  );
}
