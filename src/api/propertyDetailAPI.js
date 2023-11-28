import axiosSecure from ".";

export const getPropertyDetails = async (id) => {
  const { data } = await axiosSecure(`/propertydetails/${id}`);
  return data;
};

export const saveReviewtoDB = async (newReview) => {
  console.log("ht");
  const { data } = await axiosSecure.post("/addreview", newReview);
  return data;
};

export const getReviewForAProperty = async (id) => {
  console.log("jidt");
  const { data } = await axiosSecure(`/allreviews?propertyId=${id}`);
  return data;
};
