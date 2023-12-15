/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { usePosts } from "../context/PostProvider";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const { deletePost } = usePosts();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Do you want to delete? <strong>{id}</strong>
          </p>
          <div>
            <button
              className="px-3 py-2 mx-2 text-sm text-white bg-red-500 rounded-sm hover:bg-red-400"
              onClick={() => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
            <button
              className="px-3 py-2 mx-2 text-white rounded-sm bg-slate-400 hover:bg-slate-500"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };

  return (
    <div
      className="text-white rounded-sm shadow-md bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3>{post.title}</h3>
          <button
            className="px-2 py-1 text-sm bg-red-600 rounded-sm hover:bg-red-500"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(post._id);
            }}
          >
            Delete
          </button>
        </div>
        <p>{post.description}</p>
      </div>
      {post.image && (
        <img src={post.image.url} className="object-cover w-full h-96" />
      )}
    </div>
  );
};

export default PostCard;
