<script setup lang="ts">
import type { ProductDetail } from "@/models/product.model";
import router from "@/router";
import {
  getProductDetail,
  getProducts,
  saveProduct,
} from "@/services/product.servives";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const productDetails = ref<ProductDetail>();

const route = useRoute();

const productId = route.params.id.toString();
onMounted(async () => {
  const result = await getProductDetail(productId);
  productDetails.value = result.data;
});

const formValue = ref({
  productId: productId,
  quantity: "",
  firstname: "",
  lastname: "",
  detail: "",
});
const submitDetail = () => {
  // console.log({ formValue });
  saveProduct(formValue.value);

  // productDetails.value = result;

  //router.push({ name: "detail", params: { id: id } });

  //router.push({ name: "detail", params: { id: id } });
};
</script>
<template>
  <div>
    <form @submit.prevent="submitDetail()">
      <div class="card card-side bg-base-100 shadow-xl">
        <figure>
          <img :src="productDetails?.image" alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ productDetails?.title }}</h2>
          <p>{{ productDetails?.description }}</p>
          <div class="card-actions justify-end">
            <span>Quantity:</span>
            <input
              v-model="formValue.quantity"
              type="text"
              placeholder="Type Quantity"
              class="input input-bordered input-info w-full max-w-xs"
            />
          </div>
        </div>
      </div>
      <div class="card boxform mt-2">
        <div class="inline-grid">
          <input
            v-model="formValue.firstname"
            type="text"
            placeholder="firstname"
            class="input input-bordered input-info w-full mt-2"
          />
          <input
            v-model="formValue.lastname"
            type="text"
            placeholder="lastname"
            class="input input-bordered input-info w-full mt-2"
          />
        </div>
        <div>
          <textarea
            v-model="formValue.detail"
            class="textarea textarea-primary mt-2 w-full"
            placeholder="Bio"
          ></textarea>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" type="submit">View More</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.bodycard {
  align-items: center;
  gap: 24px;
  justify-content: center;
}
.boxform {
  padding: 10px;
}
</style>
