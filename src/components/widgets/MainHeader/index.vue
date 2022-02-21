<template>
  <div class="header">
    <div class="header__wrapper container">
      <button class="header__btn" type="button" @click="changeLocale">
        <img class="header__img" src="@/assets/img/icons/locale.svg" alt="locale" />
        <span class="header__text">{{ city }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import modals from '@/plugins/modals';
import { mapActions } from 'vuex';

export default {
  name: "MainHeader",
  data: () => ({
    city: 'Новосибирск'
  }),
  created() {
    let locale = localStorage.getItem('locale')
    if (locale) {
      locale = JSON.parse(locale)
      this.city = locale.city
    }
  },
  methods: {
    ...mapActions({
      modalShow: 'modal/modalShow',
      modalHide: 'modal/modalHide',
      fetchCategories: 'catalog/fetchCategories'
    }),
    changeLocale() {
      this.modalShow({
        key: modals.locale,
        title: 'Выбор населённого пункта:',
        handler: (item) => {
          this.changeCities(item),
          this.modalHide()
        }
      })
    },
    changeCities(item) {
      this.city = item.city
      const data = JSON.stringify(item)
      localStorage.setItem('locale', data)
      this.fetchCategories({ cityId: item.id })
    }
  }
};
</script>

<style scoped>
.header {
  max-height: 72px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(39, 39, 39, 0.1);
}
.header__wrapper {
  padding-top: 25px;
  padding-bottom: 23px;
}
.header__btn {
  display: flex;
  align-items: center;
}
.header__img {
  max-width: 16px;
  height: 16px;
  margin-right: 7px;
  object-fit: contain;
}
.header__text {
  width: max-content;
  white-space: nowrap;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.6;
  color: #272727;
}
</style>
