<script setup lang="ts">
import type { ProductDetail } from "@/models/product.model";
import { getProductDetail, getProducts } from "@/services/product.servives";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const productDetails = ref<ProductDetail>();

const route = useRoute();

const productId = route.params.id.toString();
onMounted(async () => {
  const result = await getProductDetail(productId);
  productDetails.value = result.data;
});
</script>
<template>
  <div class="bodycard">
    <div class="card card-side bg-base-100 shadow-xl">
      <figure>
        <img :src="productDetails?.image" alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ productDetails?.title }}</h2>
        <p>{{ productDetails?.description }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">BUY NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodycard {
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
}
</style>
