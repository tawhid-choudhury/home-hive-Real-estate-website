import axiosSecure from ".";

export const getFeatured = async () => {
  const { data } = await axiosSecure("/allproperties?featured=true");
  return data;
};
