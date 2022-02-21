<template>
  <button type="button" class="card" :style="variableStyle" @click="relocateToSlug">
    <span class="card__name">{{ category.name }}</span>
    <img class="card__img" :src="category.image" :alt="category.name">
  </button>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    category: {
      type: Object,
      defaullt: () => ({})
    }
  },
  computed: {
    variableStyle() {
      return [
        {'--color-text': this.category.text_color}
      ]
    }
  },
  methods: {
    async relocateToSlug() {
      this.$router.push(`/category/${this.category.slug}`)
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  display: block;
  max-width: 271px;
  height: 152px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.card__name {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  line-height: 1.167;
  font-weight: 600;
  text-align: left;
  color: var(--color-text);
}

.card__img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: right;
}
</style>
