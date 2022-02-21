<template>
  <component
    :is="btnElementName"
    class="base-btn"
    :class="btnClass"
    :to="routerLink || null"
    :href="link || null"
    :target="link ? '_blank' : null"
    :disabled="disabled"
    @onClick="handleClick"
    :type="type"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'base-btn',
    props: {
    mode: {
      type: String,
      default: 'yellow'
    },
    link: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button'
    },
    routerLink: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    btnElementName () {
      if (this.link !== '') {
        return 'a'
      }
      if (this.routerLink !== '') {
        return 'router-link'
      }
      return 'button'
    },
    btnClass () {
      return [
        { 'base-btn_yellow': this.mode === 'yellow' },
        { 'base-btn_black': this.mode === 'black' },
        { 'base-btn_link': this.mode === 'link' }
      ]
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.base-btn {
  padding: 6px 20px;
  width: 100%;
  border-radius: 24px;
  line-height: 1.33;
  font-weight: 600;
}
.base-btn_yellow {
  color: #ffffff;
  background: linear-gradient(270deg, #FFA800 0%, #FF6F00 100%);
  box-shadow: 0px 12px 19px -14px #ffa800, 0px 12px 19px -11px #ff6f00;
}
.base-btn_yellow:hover {
  background: linear-gradient(270deg, #ff8800 0%, #ff5e00 100%);
  box-shadow: 0px 12px 19px -14px #ffa800, 0px 12px 19px -11px #ff5e00;
}
.base-btn_yellow:active {
  transform: translateY(2px) scale(.95);
}
.base-btn_black {
  padding: 6px;
  background-color: #030303;
}
.base-btn:disabled {
  background: #ffffff;
  color: rgba(39, 39, 39, 0.5);
  border: 2px solid rgba(151, 151, 151, 0.3);
  box-shadow: none;
}
.base-btn_link {
  border-radius: 0;
  display: inline-block;
  padding: 8px 12px 8px 5px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
}
.router-link-exact-active {
  background: #E9EEF3;
}

</style>