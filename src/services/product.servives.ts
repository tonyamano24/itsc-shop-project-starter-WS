import type { ProductDetail } from "@/models/product.model";
import axios from "axios";

// const form {
//   id: ;
//   title: ;
//   price: ;
//   description: ;
//   category: ;
//   image: ;
//   rating: ;
// }

export const getProducts = () =>
  axios.get<ProductDetail[]>(
    `https://e-commerce-workshop-api.vercel.app/api/products`
  );
export const getProductDetail = (id: string) =>
  axios.get<ProductDetail>(
    `https://e-commerce-workshop-api.vercel.app/api/products/${id}`
  );
export const saveProduct = async (form: {
  productId: string;
  quantity: string;
  firstname: string;
  lastname: string;
  detail: string;
}) => {
  try {
    await axios.post(
      `https://e-commerce-workshop-api.vercel.app/api/checkout`,
      form
    );
    console.log("Success");
  } catch (error) {
    console.error("error");
  }
};
