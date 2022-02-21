<template>
  <transition name="fade">
    <div v-if="isLoading" class="loader">
      <div class="loader__ring"></div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "loader-screen",
  computed: {
    ...mapGetters({
      isLoading: 'loader/getIsLoading'
    }),
  },
};
</script>

<style scoped>
.loader {
  padding: 10px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(53,54,71, .8);
  z-index: 100;
  align-items: center;
  justify-content: center;
  display: flex;
}

.loader__ring {
  display: inline-block;
  width: 100px;
  height: 100px;
}
.loader__ring:after {
  content: " ";
  display: block;
  width: 84px;
  height: 84px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ffa800;
  border-color: #ff6f00 transparent #ff6f00 transparent;
  animation: lds-dual-ring 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>