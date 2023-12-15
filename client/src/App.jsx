import PostProvider from "./context/PostProvider";
import { HomePage, NotFoundPage, PostForm } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/new" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </PostProvider>
  );
};

export default App;
