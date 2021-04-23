<template>
  <div class="filters">
    <h3 class="filters__title">Filters</h3>
    <form class="filters__form" action="#">
      <label
        class="filters__label"
        for="filter-number-Account"
      >
        Номер накладной
      </label>
      <input
        class="filters__input"
        type="text"
        placeholder="Введите значение"
        id="filter-number-Account"
      />
    </form>
  </div>
</template>

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
  }
</style>
