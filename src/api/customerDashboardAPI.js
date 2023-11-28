import axiosSecure from ".";

export const getUserRole = async (email) => {
  const { data } = await axiosSecure(`/getuser/${email}`);
  return data;
};
