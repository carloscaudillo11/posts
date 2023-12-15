import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "djnryx9yh",
  api_key: "611152753948721",
  api_secret: "aYv7WX9nesakm0uO-S9iDn9epEw",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
