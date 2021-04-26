<template>
  <div class="filters">
    <h3 class="filters__title">Filters</h3>
    <form class="filters__form" @submit.prevent action="#">
      <label
        class="filters__label"
        for="filter-number-Account"
      >
        Номер накладной:
      </label>
      <input
        class="filters__input"
        id="filter-number-Account"
        v-model="message"
        @keyup.enter="callFilter"
        type="text"
        placeholder="Введите значение"
      />
    </form>
    <button
      class="filters__btn-cancel"
      :class="{'filters__btn-cancel_active': activeBtn}"
      @click="closeFilter"
      >Сбросить фильтор</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      message: '',
      activeBtn: false,
    };
  },
  methods: {
    ...mapMutations(['openResultFilter', 'closeResultFilter']),
    callFilter() {
      this.openResultFilter(this.message);
      this.message = '';
      this.activeBtn = true;
    },
    closeFilter() {
      this.closeResultFilter();
      this.activeBtn = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .filters {
    margin-bottom: auto;
    background: #fff;
    box-shadow: 0px 4px 12px #e7e7e7;

    &__title {
      padding: 15px 35px 5px;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      border: 1px solid #f8f8f8;
    }

    &__form {
      padding: 15px 30px 0;
      display: flex;
      flex-flow: column;
    }

    &__label {
      margin-bottom: 10px;
      font-weight: 500;
      line-height: 16px;
    }

    &__input {
      margin-bottom: 20px;
      padding-left: 10px;
      font-weight: 400;
      font-size: 14px;
      height: 30px;
      background: #ffffff;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
    }

    &__btn-cancel {
      margin: 0 30px 15px;
      padding: 10px 20px;
      font-weight: 700;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #fff;
      background: #4943cd;
      border-radius: 3px;
      cursor: pointer;

      &_active {
        background: #a039a2;
      }
    }
  }
</style>
