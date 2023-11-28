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
