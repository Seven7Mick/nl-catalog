<template>
  <transition name="fade">
    <div
      v-if="isShow"
      class="base-modal"
      @mousedown.self="backgroundClick"
    >
      <component :is="currentModalKey" />
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import modals from '@/plugins/modals'
import ModalLocale from '@/components/widgets/Modals/ModalLocale'

export default {
  name: 'BaseModalContainer',
  components: {
    'locale': ModalLocale
  },
  data: () => ({
    modals
  }),
  computed: {
    ...mapGetters({
      isShow: 'modal/getIsShow',
      currentModalKey: 'modal/getCurrentModalKey',
    })
  },
  methods: {
    ...mapActions({
      modalHide: 'modal/modalHide'
    }),
    backgroundClick () {
      this.modalHide()
    }
  }
}
</script>

<style scoped>
.base-modal {
  padding: 10px;
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(53,54,71, .8);
  z-index: 1400;
  text-align: center;
  white-space: nowrap;
  font-size: 0;
}
.base-modal:after {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
  content: "";
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
