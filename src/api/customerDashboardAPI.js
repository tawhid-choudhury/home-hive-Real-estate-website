import axiosSecure from ".";

export const getUserRole = async (email) => {
  const { data } = await axiosSecure(`/getuser/${email}`);
  return data;
};

export const getReviewfromUser = async (email) => {
  console.log("jidt");
  const { data } = await axiosSecure(`/allreviews?email=${email}`);
  return data;
};

export const deleteReview = async (id) => {
  const { data } = await axiosSecure.delete(`/allreviews/${id}`);
  return data;
};

export const getwishlist = async (email) => {
  const { data } = await axiosSecure(`/wishlist?email=${email}`);
  return data;
};

export const deleteWishlist = async (id) => {
  const { data } = await axiosSecure.delete(`/wishlist/${id}`);
  return data;
};

export const saveToBoughtDB = async (newProperty) => {
  const { data } = await axiosSecure.post("/bought", newProperty);
  return data;
};
