import axiosSecure from ".";

export const getPropertyDetails = async (id) => {
  const { data } = await axiosSecure(`/propertydetails/${id}`);
  return data;
};

export const saveReviewtoDB = async (newReview) => {
  const { data } = await axiosSecure.post("/addreview", newReview);
  return data;
};

export const getReviewForAProperty = async (id) => {
  const { data } = await axiosSecure(`/allreviews?propertyId=${id}`);
  return data;
};

export const saveToWishlistDB = async (newProperty) => {
  const { data } = await axiosSecure.post("/wishlist", newProperty);
  return data;
};
