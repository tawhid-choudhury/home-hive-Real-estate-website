import axios from "axios";

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IBB_API_KEY}`,
    formData
  );
  // console.log(data.data.display_url);
  return data;
};

export const getTimeAgo = (timestamp) => {
  const date = new Date(timestamp);
  const currentDate = new Date();
  const timeDifference = currentDate - date;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let timeAgo = "";
  if (days > 0) {
    timeAgo = days + " days ago";
  } else if (hours > 0) {
    timeAgo = hours + " hours ago";
  } else if (minutes > 0) {
    timeAgo = minutes + " minutes ago";
  } else {
    timeAgo = seconds + " seconds ago";
  }

  return timeAgo;
};

export const getTime = (timestamp) => {
  const date = new Date(timestamp);
  const localTime = date.toLocaleString();
  console.log(localTime);
  return localTime;
};
