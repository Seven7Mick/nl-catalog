<template>
  <div class="sidebar" v-if="currentList.length">
    <ul class="sidebar__list">
      <li v-for="slug of currentList" :key="`slug-${slug.id}`" class="sidebar__item">
        <base-btn class="sidebar__link" mode="link" :routerLink="routerLink(slug)"  @click="changeSlug(slug)">{{ slug.name }}</base-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters({
      getSortingProducts: 'catalog/getSortingProducts'
    }),
    currentList() {
      const categoryAll = {
        id: 0,
        name: 'Все продукты',
        slug: ''
      }
      if (this.list?.length >= 2) {
        return [categoryAll, ...this.list]
      } else {
        return this.list
      }
    }
  },
  methods: {
    routerLink(slug) {
      return `/category/${this.$route.params.slug}/${slug.slug}`
    },
    changeSlug (slug) {
      this.getSortingProducts(slug?.slug)
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 100%;
}
.sidebar__list {
  border-top: 1px solid #E9EEF3;
  border-bottom: 1px solid #E9EEF3;
}
.sidebar__item {
  cursor: pointer;
}
.sidebar__item:not(:last-child) {
  border-bottom: 1px solid #E9EEF3;
}
.sidebar__item:hover {
  background-color: #e9eef371;
}
</style>
