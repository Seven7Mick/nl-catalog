<template>
  <div class="base-modal__box">
    <div class="base-modal__header">
      <div class="base-modal__title">
        <span>{{ options.title || "Default" }}</span>
      </div>
      <button class="base-modal__close" @click="hide">
        <img src="@/assets/img/icons/close.svg" alt="close" />
      </button>
    </div>
    <slot />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "base-modal-box",
  computed: {
    ...mapGetters({
      options: "modal/getOptions",
    }),
  },
  methods: {
    ...mapActions({
      hide: "modal/modalHide",
    }),
  },
};
</script>

<style scoped>
.base-modal__box {
  white-space: normal;
  word-break: break-word;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  position: relative;
  text-align: left;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  border-radius: 5px;
  padding: 18px;
}
.base-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 20px;
}
.base-modal__title {
  margin-top: 10px;
}
.base-modal__close {
  max-width: 16px;
  transition: 0.4s;
}
.base-modal__close:hover {
  transform: rotate(90deg) scale(1.1);
}
.base-modal__close:active {
  transform: rotate(90deg) scale(0.9);
}

@media screen and (max-width: 550px) {
  .base-modal__header {
    font-size: 16px;
  }
}
</style>