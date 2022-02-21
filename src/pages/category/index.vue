<template>
  <div class="categories container">
    <h2 class="categories__title title">Категории товаров</h2>
    <div class="categories__list">
      <CategoryCard
        v-for="item of getCategories"
        :key="`category-${item.id}`"
        :category="item"
        class="categories__card"
      />
    </div>
  </div>
</template>

<script>
import CategoryCard from '@/components/widgets/CategoryCard'
import { mapGetters } from 'vuex'

export default {
  name: 'page-category',
  components: {
    CategoryCard
  },
  computed: {
    ...mapGetters({
      getCategories: 'catalog/getCategories'
    }),
    
  }
}
</script>

<style scoped>
.categories {
  padding-top: 40px;
  padding-bottom: 40px;
}
.categories__title {
  margin-bottom: 20px;
}
.categories__list {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}
</style>
