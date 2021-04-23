<template>
  <div class="card">
    <h4 class="card__subtitle">Card</h4>
    <div class="card__box-btn">
      <button class="btn-control btn-control_check-mark"
        :class="{'visuallyhidden': !editor}"
        @click="redactWaybill(waybill.id)"
        ></button>
      <button class="btn-control btn-control_edit"
        :class="{visuallyhidden: hideButtons}"
        @click="toggleEditor"
        ></button>
      <button class="btn-control btn-control_delete"
        :class="{visuallyhidden: hideButtons}"
        @click="removeWaybill(waybill.id)"
        ></button>
      <button class="card__btn-open"
        @click="showBtn"
        ></button>
    </div>
    <ul class="card__list-data">
      <li class="card__elem-data">ID:
        <span>{{waybill.id}}</span>
      </li>
      <li class="card__elem-data">Дата:
        <input v-if="editor" type="text" v-model="date">
        <span v-else>{{waybill.date}}</span>
      </li>
      <li class="card__elem-data">Номер:
        <input v-if="editor" type="text" v-model="number">
        <span v-else>{{waybill.number}}</span>
      </li>
      <li class="card__elem-data">Тип заказа:
        <select v-if="editor" v-model="type">
          <option value="RUED">RUED</option>
          <option value="RUEX">RUEX</option>
          <option value="RUSG">RUSG</option>
        </select>
        <span v-else>{{waybill.type}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      hideButtons: true,
      editor: false,
      number: this.waybill.number,
      type: this.waybill.type,
      date: this.waybill.date,
    };
  },
  props: {
    waybill: {
      typy: Object,
    },
  },

  methods: {
    ...mapMutations(['deleteWaybill', 'editWaybill']),
    removeWaybill(id) {
      this.deleteWaybill(id);
    },
    redactWaybill(id) {
      const editedElem = {
        id,
        number: this.number,
        type: this.type,
        date: this.date,
      };
      this.editWaybill(editedElem);
      this.closeEditor();
    },
    showBtn() {
      this.hideButtons = !this.hideButtons;
      if (this.editor) {
        this.closeEditor();
      }
    },
    toggleEditor() {
      this.editor = !this.editor;
    },
    closeEditor() {
      this.editor = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    margin: 0 20px 20px 0;
    width: 290px;
    background: #f6fafb;
    box-shadow: 0px 4px 12px #ebebeb;
    border-radius: 0 0 3px 3px;
    position: relative;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &__subtitle {
      padding: 13px 20px 7px;
      font-weight: 500;
      font-size: 18px;
      line-height: 20px;
      background: #f1f1f8;
    }

    &__box-btn {
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
    }

    &__btn-open {
      width: 20px;
      height: 24px;
      background: none;
      position: relative;
      cursor: pointer;

      &::before {
        content: '';
        width: 4px;
        height: 4px;
        background: #647a8c;
        box-shadow: 0 8px 0 0 #647a8c, 0 16px 0 0 #647a8c;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &__list-data  {
      padding: 4px 20px 20px;
    }

    &__elem-data {
      height: 30px;
      border-bottom: 1px solid #f2f2f2;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .btn-control {
    width: 23px;
    height: 23px;
    margin-right: 5px;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: background-color .2s;

    &:hover {
      background-color: #a039a2;
    }

    &_disabled {
      background-color: #a039a2;
    }

    &_delete {
      background-image: url(../assets/delete-k.png);
    }

    &_edit {
      background-image: url(../assets/edit24.png);
    }

    &_check-mark {
      background-image: url(../assets/check-mark.png);
      &:hover {
        background-color: #4943cd;
      }
    }
  }

  input, select {
    background: #eee;
  }

  input {
    width: 150px;
  }
</style>
