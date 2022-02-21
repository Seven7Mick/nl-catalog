<template>
  <div class="primary">
    <main-header />
    <router-view />
    <base-modal-container />
  </div>
</template>

<script>
import MainHeader from '@/components/widgets/MainHeader'
import BaseModalContainer from '@/components/ui/BaseModalContainer'
import { mapActions } from 'vuex'

export default {
  name: 'DefaultLayout',
  components: {
    'main-header': MainHeader,
    'base-modal-container': BaseModalContainer
  },
  methods: {
    ...mapActions({
      fetchCategories: 'catalog/fetchCategories'
    })
  },
  mounted() {
    let locale = localStorage.getItem('locale')
    if (locale) {
      locale = JSON.parse(locale)
    }
    const cityId = locale?.id || 1
    this.fetchCategories({ cityId })
  },
}
</script>

<style scoped>
.primary {
  min-height: 100vh;
  background: #F7F7F7;
}
</style>