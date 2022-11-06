import type { ProductDetail } from "@/models/product.model";
import axios from "axios";

export const getProducts = () =>
  axios.get<ProductDetail[]>(
    `https://e-commerce-workshop-api.vercel.app/api/products`
  );
