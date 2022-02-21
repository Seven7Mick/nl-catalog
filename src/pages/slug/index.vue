<template>
  <div class="slug container">
    <div v-if="categoryItem.name" class="slug__head">
      <base-btn mode="black" class="slug__back" @click="back">
        <img
          class="slug__back-img"
          src="@/assets/img/icons/arrow-left.svg"
          alt="back"
        />
      </base-btn>
      <h2 class="slug__title title">{{ categoryItem.name }}</h2>
    </div>
    <div class="slug__container">
      <SideBar class="slug__sidebar" :list="categoryItem.children" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/widgets/SideBar";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "page-slug",
  components: {
    SideBar,
  },
  watch: {
    getCityId: {
      immediate: true,
      async handler(newVal) {
        if (newVal) {
          const slug = this.$route.params.slug;
          if (!this.getCategories?.length) {
            await this.fetchCategories({ cityId: newVal });
          }
          await this.fetchProducts({ cityId: newVal, slug });
        }
      },
    },
  },
  computed: {
    ...mapGetters({
      getCityId: "catalog/getCityId",
      getCategories: "catalog/getCategories",
      getCategory: "catalog/getCategory",
    }),
    categoryItem() {
      const { slug } = this.$route.params
      return this.getCategory(slug);
    },
  },
  methods: {
    ...mapActions({
      fetchCategories: "catalog/fetchCategories",
      fetchProducts: "catalog/fetchProducts",
      clearProducts: "catalog/clearProducts"
    }),
    back() {
      this.$router.push("/category");
    },
  },
  beforeUnmount() {
    this.clearProducts()
  }
};
</script>

<style scoped>
.slug {
  padding-top: 35px;
  padding-bottom: 150px;
}
.slug__head {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.slug__back {
  max-width: 30px;
  height: 30px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slug__back-img {
  max-width: 14px;
}
.slug__container {
  display: flex;
}
.slug__sidebar {
  flex: 0 0 240px;
  margin-right: 34px;
}

@media screen and (max-width: 886px) {
  .slug__container {
    flex-direction: column;
  }
  .slug__sidebar {
    flex: 0 0 auto;
    margin-bottom: 20px;
  }
}
</style>
