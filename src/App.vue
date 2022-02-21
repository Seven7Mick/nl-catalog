<template>
  <default-layout />
  <loader-screen />
</template>

<script>
import DefaultLayout from '@/layout/default.vue'
import LoaderScreen from '@/components/ui/LoaderScreen/index.vue'

export default {
  name: 'App',
  components: {
    'default-layout': DefaultLayout,
    'loader-screen': LoaderScreen
  }
}
</script>
