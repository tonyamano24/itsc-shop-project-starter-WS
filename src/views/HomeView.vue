<script setup lang="ts">
import type { ProductDetail } from "@/models/product.model";
import { useRouter } from "vue-router";
import { getProducts } from "@/services/product.servives";
import { onMounted, ref } from "vue";

const productDetails = ref<ProductDetail[]>();
const router = useRouter();

onMounted(async () => {
  const result = await getProducts();
  productDetails.value = result.data;
});

const onNavigateDetail = (id: string) => {
  // console.log({ id });

  router.push({ name: "detail", params: { id: id } });
};
</script>
<template>
  <div class="bodyBox">
    <div
      v-for="(productDetail, index) of productDetails"
      :key="index"
      class="card card-compact w-96 bg-base-100 shadow-xl mb-5"
    >
      <figure><img :src="productDetail.image" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">{{ productDetail.title }}</h2>
        <p>{{ productDetail.price }}</p>

        <div class="card-actions justify-end">
          <button
            class="btn btn-primary"
            @click="onNavigateDetail(productDetail.id)"
          >
            View More
          </button>
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
