<template>
  <fieldset class="field" :class="{ field_active: list.length }">
    <input
      class="field__input"
      type="text"
      placeholder="Например, Санкт-Петербург"
      autocomplete="off"
      v-model="inputValue"
      @input="handlerInput"
    />
    <button v-show="inputValue.length" type="button" @click="clearInput">
      <img
        class="field__close"
        src="@/assets/img/icons/close.svg"
        alt="close"
      />
    </button>
    <ul v-show="list.length" class="field__list">
      <li
        v-for="item of list"
        :key="item.id"
        class="field__item"
        @mousedown="targetValue(item)"
      >
        {{ item.label }}
      </li>
    </ul>
  </fieldset>
</template>

<script>
export default {
  name: "base-field-search",
  emits: ["update:input", "update:input-clear", "update:input-target"],
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    inputValue: "",
  }),
  methods: {
    handlerInput(event) {
      this.$emit("update:input", event.target.value);
    },
    clearInput() {
      this.inputValue = "";
      this.$emit("update:input-clear");
    },
    targetValue(item) {
      this.inputValue = item.label;
      this.$emit("update:input-target", item);
    },
  },
};
</script>

<style scoped>
.field {
  position: relative;
  --heigth-input: 48px;
}
.field__input {
  width: 100%;
  max-height: var(--heigth-input);
  padding: 13px 40px 13px 16px;
  font-size: 18px;
  line-height: 1.278;
  color: #272727;
  border: 1px solid rgba(151, 151, 151, 0.5);
  border-radius: 5px;
}
.field__input:active,
.field__input:focus {
  border: 1px solid #272727;
}
.field__close {
  position: absolute;
  top: 50%;
  right: 20px;
  height: 12px;
  width: 12px;
  transform: translateY(-50%);
}
.field_active .field__input:active,
.field_active .field__input:focus {
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid transparent;
}
.field_active .field__input:active ~ .field__list,
.field_active .field__input:focus ~ .field__list {
  border-radius: 0 0 5px 5px;
  border-top: none;
}
.field__input:active ~ .field__list,
.field__input:focus ~ .field__list {
  display: block;
}

.field__input::placeholder {
  color: #979797;
}
.field__list {
  position: absolute;
  display: none;
  padding: 0 20px 12px 12px;
  left: 0;
  top: var(--heigth-input);
  font-size: 18px;
  line-height: 1.33;
  width: 100%;
  height: max-content;
  background: #ffffff;
  border: 1px solid #272727;
  box-sizing: border-box;
  border-radius: 5px;
}
.field__list::before {
  content: "";
  display: block;
  margin-bottom: 12px;
  width: 100%;
  height: 2px;
  background-color: rgba(151, 151, 151, 0.3);
}
.field__item {
  color: #979797;
  cursor: pointer;
}
.field__item:hover {
  color: #272727;
}
.field__item:not(:last-child) {
  margin-bottom: 7px;
}

@media screen and (max-width: 550px) {
  .field__input {
    font-size: 14px;
  }
  .field__list {
    font-size: 14px;
  }
}
</style>