<script setup lang="ts">
import type { ProductDetail } from "@/models/product.model";
import { getProductDetail, getProducts } from "@/services/product.servives";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const productDetail = ref<ProductDetail>();

const route = useRoute();
const router = useRouter();

const productId = route.params.id.toString();
onMounted(async () => {
  const result = await getProductDetail(productId);
  productDetail.value = result.data;
});

const getProduct = (id?: string) => {
  // console.log({ id });

  router.push({ name: "checkout", params: { id: id } });
};
</script>
<template>
  <div class="bodycard">
    <div class="card card-side bg-base-100 shadow-xl">
      <figure>
        <img :src="productDetail?.image" alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ productDetail?.title }}</h2>
        <p>{{ productDetail?.description }}</p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary"
            @click="getProduct(productDetail?.id)"
          >
            BUY NOW
          </button>
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
