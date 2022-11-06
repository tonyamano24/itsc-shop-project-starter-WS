<script setup lang="ts">
import type { ProductDetail } from "@/models/product.model";
import { getProducts } from "@/services/product.servives";
import { onMounted, ref } from "vue";

const productDetails = ref<ProductDetail[]>();

onMounted(async () => {
  const result = await getProducts();
  productDetails.value = result.data;
});
</script>
<template>
  <div class="bodyBox">
    <div
      v-for="(productDetail, index) of productDetails"
      class="card card-compact w-96 bg-base-100 shadow-xl mb-5"
    >
      <figure><img :src="productDetail.image" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">{{ productDetail.title }}</h2>
        <p>{{ productDetail.price }}</p>

        <div class="card-actions justify-end">
          <button class="btn btn-primary">View More</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bodyBox {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
