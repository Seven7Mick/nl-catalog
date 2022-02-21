<template>
  <div class="product">
    <div class="product__picture">
      <img
        class="product__img"
        :src="product.images_thumb_300[0]"
        :alt="product.full_name"
      />
    </div>
    <div class="product__description">
      <span class="product__category-name">{{ product.category.name }}</span>
      <p class="product__name">{{ product.present_name }}</p>
      <div class="product__cost">
        <span class="product__comment">{{ product.comment_name }}</span>
        <span class="product__price">{{ product.price }} ₽</span>
        <base-btn class="product__btn" :disabled="isDisabledBtn">{{
          nameProductCardBtn
        }}</base-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isDisabledBtn() {
      return !this.product.allowed || !this.product.available;
    },
    nameProductCardBtn() {
      return this.isDisabledBtn ? "Нет в наличии" : "В корзину";
    },
  },
};
</script>

<style scoped>
.product {
  --max-width: 276px;
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  text-align: center;
  color: #272727;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  border-radius: 0px 0px 5px 5px;
  overflow: hidden;
}
.product__picture {
  flex: 0 0 auto;
}
.product__img {
  max-width: var(--max-width);
  object-fit: contain;
}
.product__description {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px 20px 23px;
}
.product__category-name {
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: #979797;
}
.product__name {
  flex: 1 1 auto;
  margin-bottom: 9px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
}
.product__comment {
  display: block;
  flex: 1 1 auto;
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 1.25;
}
.product__price {
  display: block;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 26px;
}
.product__btn {
  height: 40px;
  font-size: 18px;
}
</style>