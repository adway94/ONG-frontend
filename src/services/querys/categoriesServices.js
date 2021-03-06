import { MAIN_URL, SERVER_URL_CATEGORIES } from "../../const/const";
import apiServices from "./apiServices";
import axios from "axios";
import { SERVER_URL } from "../../const/const";

const getCategories = () => {
  return apiServices.get(SERVER_URL_CATEGORIES);
};

const createCategory = async (data) => {
  try {
    const response = await axios.post(
      `${MAIN_URL}${SERVER_URL_CATEGORIES}`,
      data
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

const updateCategory = async (data, id) => {
  try {
    const response = await axios.patch(
      `${MAIN_URL}${SERVER_URL_CATEGORIES}/${id}`,
      data
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(
      `${MAIN_URL}${SERVER_URL_CATEGORIES}/${id}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

function getACategory(id) {
  return axios
    .get(SERVER_URL + "/categories/" + id)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getACategory,
};
