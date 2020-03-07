import axios from "axios";

export const InstaController = () => {
  let list = {};
  return axios
    .get("https://www.instagram.com/kshaw131/?__a=1")
    .then(res => {
      list = res.data;
      return list;
    })
    .catch(err => {
      console.log(err);
    });
};
