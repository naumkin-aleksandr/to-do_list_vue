<template>
  <div class="sorting">
    <button
      class="sorting__btn-open-list"
      :class="{'sorting__btn-open-list_active': !sortingList}"
      @click="openSortingList"
    >
      Sorting
    </button>

    <ul
      class="sorting__list"
      :class="{visuallyhidden: sortingList}"
      >
      <li v-for="btn in listBtnSorting" :key="btn.type" class="sorting__item">
        <button class="sorting__btn" @click="callSorting(btn.type)">
          {{btn.text}}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      sortingList: true,
      listBtnSorting: [
        {
          text: 'ID - по возрастанию',
          type: 'IdAscending',
        },
        {
          text: 'ID - по убыванию',
          type: 'IdDescending',
        },
        {
          text: 'Дата создания - по возрастанию',
          type: 'dateAscending',
        },
        {
          text: 'Дата создания - по убыванию',
          type: 'dateDescending',
        },
      ],
    };
  },
  methods: {
    ...mapMutations(['sortingWaybills']),
    callSorting(type) {
      this.sortingWaybills(type);
      this.openSortingList();
    },
    openSortingList() {
      this.sortingList = !this.sortingList;
    },
  },
};
</script>

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
      content: "\276F";
      font-size: 20px;
      color: #4943cd;
      position: absolute;
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
      right: 10px;
    }

      &_active {
        &::before {
          color: #a039a2;
          transform: translateY(-50%) rotate(0deg);
        }
      }
    }

    &__list {
      border: 1px solid #e0e5e6;
      position: absolute;
      top: 50px;
      left: 20px;
      z-index: 2;
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
