import axiosSecure from ".";

export const getPropertyDetails = async (id) => {
  const { data } = await axiosSecure(`/propertydetails/${id}`);
  return data;
};
