import axiosSecure from ".";

export const getPropertyDetails = async (id) => {
  const { data } = await axiosSecure(`/propertydetails/${id}`);
  return data;
};

export const saveReviewtoDB = async (newReview) => {
  console.log(newReview);
  const { data } = await axiosSecure.post("/addreview", newReview);

  return data;
};
