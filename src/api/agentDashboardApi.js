import axiosSecure from ".";

export const saveToPropertiesDB = async (newProperty) => {
  const { data } = await axiosSecure.post("/allProperties", newProperty);
  return data;
};
