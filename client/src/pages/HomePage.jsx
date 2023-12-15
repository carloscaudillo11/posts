import { usePosts } from "../context/PostProvider";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components";

const HomePage = () => {
  const { posts } = usePosts();

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-2xl text-white">There are no posts</h1>
      </div>
    );
  }

  return (
    <div className="text-white">
      <header className="flex justify-between py-4">
        <h1 className="text-2xl font-bold text-gray-300">Posts ({posts.length})</h1>
        <Link to="/posts/new" className="px-3 py-2 text-white bg-indigo-500 hover:bg-indigo-600 ">Create New Post</Link>
      </header>
      <div className="grid grid-cols-3 gap-4 ">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
