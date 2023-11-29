import axiosSecure from ".";

export const saveToPropertiesDB = async (newProperty) => {
  const { data } = await axiosSecure.post("/allProperties", newProperty);
  return data;
};

export const getPropertiesFromAgent = async (email) => {
  const { data } = await axiosSecure(`/allProperties?agentEmail=${email}`);
  return data;
};

export const deleteProperty = async (id) => {
  const { data } = await axiosSecure.delete(`/allproperty/${id}`);
  return data;
};
