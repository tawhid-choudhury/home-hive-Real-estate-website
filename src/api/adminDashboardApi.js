import axiosSecure from ".";

export const getAllProperties = async () => {
  const { data } = await axiosSecure("/allproperties");
  return data;
};

export const getAllUsers = async () => {
  const { data } = await axiosSecure("/allUsers");
  return data;
};

export const getAllReview = async () => {
  const { data } = await axiosSecure(`/allreviews`);
  return data;
};
