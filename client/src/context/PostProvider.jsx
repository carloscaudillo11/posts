import { createContext, useContext, useState, useEffect } from "react";
import {
  getPostsRequest,
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/post";

const PostContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error("usePost must be used within a PostProvider");
  return context;
};

// eslint-disable-next-line react/prop-types
const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequest();
    setPosts(res.data);
  };

  const createPost = async (post) => {
    const res = await createPostRequest(post);
    setPosts([...posts, res.data]);
    console.log(res);
  };

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) setPosts(posts.filter((post) => post._id !== id));
    console.log(res);
  };

  const getPost = async (id) => {
    const res = await getPostRequest(id);
    return res.data;
  };

  const updatePost = async (id, post) => {
    const res = await updatePostRequest(id, post);
    setPosts(posts.map((post) => (post._id == id ? res.data : post)));
    console.log(res);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, getPosts, createPost, deletePost, getPost, updatePost }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
