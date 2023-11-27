import axiosSecure from ".";

export const getAll = async () => {
  const { data } = await axiosSecure.get("/allproperties");
  return data;
};

export const getVerified = async () => {
  const { data } = await axiosSecure(
    "/allproperties?verificationStatus=Verified"
  );
  return data;
};
