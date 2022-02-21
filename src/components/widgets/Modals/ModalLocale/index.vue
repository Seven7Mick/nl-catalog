<template>
  <base-modal-box class="base-modal__box">
    <div class="base-modal__content">
      <base-field-search
        class="base-modal__field"
        :list="getCities"
        v-debounce:500="handlerInput"
        @update:input-clear="clearInput"
        @update:input-target="targetValue"
      />
      <base-btn
        class="base-modal__btn"
        :disabled="isDisabledBtn"
        @click="accept"
      >
        Подтвердить
      </base-btn>
    </div>
  </base-modal-box>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getDirective } from 'vue-debounce'

export default {
  name: 'ModalLocale',
  directives: {
    debounce: getDirective(3)
  },
  data: () => ({
    searchValue: {},
    handler: () => ({})
  }),
  computed: {
    ...mapGetters({
      options: 'modal/getOptions',
      getCities: 'catalog/getCities'
    }),
    isDisabledBtn() {
      return !Object.keys(this.searchValue).length
    }
  },
  methods: {
    ...mapActions({
      fetchCities: 'catalog/fetchCities',
      clearCities: 'catalog/clearCities'
    }),
    handlerInput(value) {
      if (value.length >= 3) {
        this.fetchCities({ term: value })
      }
    },
    clearInput() {
      this.searchValue = {}
      this.clearCities()
    },
    targetValue(item) {
      this.searchValue = item
      this.fetchCities({ term: item.city })
    },
    accept() {
      this.options.handler(this.searchValue)
    }
  }
}
</script>

<style scoped>
.base-modal__box {
  max-width: 770px;
}
.base-modal__content {
  display: flex;
}
.base-modal__field {
  flex: 1 0 250px;
  margin-right: 14px;
}
.base-modal__btn {
  max-width: 174px;
  font-size: 16px;
  letter-spacing: 1.75px;
  text-transform: uppercase;
}

@media screen and (max-width: 670px) {
  .base-modal__content {
    display: block;
  }
  .base-modal__field {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .base-modal__btn {
    display: block;
    margin: 0 auto;
  }
}
</style>