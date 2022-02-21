<template>
  <div class="products">
    <ProductCard
      v-for="product of sortingProduct"
      :key="`product-${product.id}`"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from '@/components/widgets/ProductCard'
import { mapGetters } from 'vuex'

export default {
  name: 'page-products',
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters({
      getSortingProducts: 'catalog/getSortingProducts'
    }),
    sortingProduct() {
      const { subSlug } = this.$route.params
      return this.getSortingProducts(subSlug)
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.products {
  max-width: 876px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

@media screen and (max-width: 1180px) {
  .products {
    justify-content: center;
  }
}
</style>