<template>
  <div class="sorting">
    <button
        class="sorting__btn-open-list"
        id="btn-sorting-open-list"
    >
        Sorting
    </button>

    <ul class="sorting__list visuallyhidden" id="sorting-list">
      <li class="sorting__item">
        <button class="sorting__btn" id="ID-ascending">
          ID - по возрастанию
        </button>
      </li>
      <li class="sorting__item">
        <button class="sorting__btn" id="ID-descending">
            ID - по убыванию
        </button>
      </li>
      <li class="sorting__item">
        <button
            class="sorting__btn"
            id="date-creation-ascending"
        >
            Дата создания - по возрастанию
        </button>
      </li>
      <li class="sorting__item">
        <button
            class="sorting__btn"
            id="date-creation-descending"
        >
            Дата создания - по убыванию
        </button>
      </li>
      <li class="sorting__item">
        <button class="sorting__btn" id="type-order-RUED">
            Тип заказа RUED
        </button>
      </li>
      <li class="sorting__item">
        <button class="sorting__btn" id="type-order-RUEX">
          Тип заказа RUEX
        </button>
      </li>
      <li class="sorting__item">
        <button class="sorting__btn" id="type-order-RUSG">
          Тип заказа RUSG
        </button>
      </li>
    </ul>
</div>
<!-- /.sorting -->
</template>

<style lang="scss" scoped>
  .sorting {
    flex: 1;
    height: 70px;
    margin-right: 20px;
    padding: 20px;
    background: #fff;
    box-shadow: 0px 4px 12px #e7e7e7;
    position: relative;

    &__btn-open-list {
      width: 250px;
      height: 30px;
      padding-left: 10px;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      text-align-last: left;
      background: #fff;
      border: 1px solid #e0e5e6;
      position: absolute;
      cursor: pointer;

    &::before {
      content: "";
      width: 10px;
      height: 6px;
      background-repeat: no-repeat;
      background-position: -24px -18px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
    }

      &_active {
        &::before {
          transform: translateY(-50%) rotate(-90deg);
        }
      }
    }

    &__list {
      border: 1px solid #e0e5e6;
      position: absolute;
      top: 50px;
      left: 20px;
      z-index: 4;
    }

    &__item {
      border-bottom: 1px solid #e0e5e6;

      &:last-child {
        border-bottom: none;
      }
    }

    &__btn {
      width: 248px;
      height: 29px;
      padding-left: 10px;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      text-align-last: left;
      background: #fff;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        box-shadow: inset 0 0 0 2px #4943cd;
      }
    }
  }
</style>
