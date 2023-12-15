/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../context/PostProvider";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const PostForm = () => {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const res = await getPost(params.id);
        setPost(res);
      }
    })();
  }, [params.id]);

  return (
    <div className="flex items-center justify-center">
      <div className="p-10 shadow-md bg-zinc-800">
        <header className="flex items-center justify-between py-4 text-white">
          <h3 className="text-xl">New Post</h3>
          <Link to="/" className="text-sm text-gray-400 hover:text-gray-300">
            Go back
          </Link>
        </header>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string(),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) await updatePost(params.id, values);
            else await createPost(values);
            actions.setSubmitting(false);
            navigate("/");
          }}
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="block text-sm font-bold text-gray-400"
              >
                Title
              </label>
              <Field
                name="title"
                placeholder="title"
                className="w-full px-3 py-2 mb-4 text-white bg-gray-600 rounded focus:outline-none"
              />
              <ErrorMessage
                name="title"
                className="text-sm text-red-400"
                component="p"
              />
              <label
                htmlFor="description"
                className="block text-sm font-bold text-gray-400"
              >
                Description
              </label>
              <Field
                component="textarea"
                name="description"
                placeholder="description"
                className="w-full px-3 py-2 text-white bg-gray-600 rounded focus:outline-none"
                rows={3}
              />
              <ErrorMessage
                name="description"
                className="text-sm text-red-400"
                component="p"
              />
              <label
                htmlFor="description"
                className="block text-sm font-bold text-gray-400"
              >
                Imagen
              </label>
              <input
                type="file"
                name="image"
                className="w-full px-3 py-2 text-white bg-gray-600 rounded focus:outline-none"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />
              <button
                type="submit"
                className="px-4 py-2 mt-2 text-white bg-indigo-600 rounded hover:bg-indigo-500 focus:outline-none disable:bg-indigo-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin"/>
                ): 'Save'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PostForm;
