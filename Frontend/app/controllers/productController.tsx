import { postAPI } from "~/utils/api";
import { domain } from "~/utils/domain";

// all products
export const getProducts = () => {
  try {
    const body = {};
    return postAPI(`${domain}/api/product/allproducts`, JSON.stringify(body));
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

// add products
export const addProduct = () => {
  try {
    const body = {};
    return postAPI("", body);
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

// update products
export const updateProduct = () => {
  try {
    const body = {};
    return postAPI("", body);
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

// delete product
export const deleteProduct = () => {
  try {
    const body = {};
    return postAPI("", body);
  } catch (err) {
    console.log("Something went wrong", err);
  }
};
