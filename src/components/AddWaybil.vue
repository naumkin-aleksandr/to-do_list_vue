<template>
  <div>
    <button class="btn-open" @click="openForm">Добоавить</button>
    <div
      class="box-form"
      :class="{'box-form_hide': !visibilityForm}"
      @click="closeForm"
      >
      <div class="wrap-form ">
        <h3>Добавление</h3>
      <form>
        <label for="nomber">Номер накладной</label>
        <input id="number" type="text" v-model="number" placeholder="Введите значение">
        <label for="type">Тип заказа</label>
        <select id="type" v-model="type">
          <option value="RUED">RUED</option>
          <option value="RUEX">RUEX</option>
          <option value="RUSG">RUSG</option>
        </select>
        <button class="btn-add" @click.prevent="addWaybill" type="submit">Сохранить</button>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      visibilityForm: false,
      number: '',
      type: '',
    };
  },
  methods: {
    ...mapMutations(['createWaybill']),
    addWaybill() {
      const newWaybill = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        number: this.number,
        type: this.type,
      };
      this.createWaybill(newWaybill);
      this.number = '';
      this.type = '';
    },
    openForm() {
      this.visibilityForm = true;
    },
    closeForm(event) {
      if (event.target.matches('.box-form')) {
        this.visibilityForm = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .btn-open {
    width: 280px;
    height: 70px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #fff;
    background: #4943cd;
    box-shadow: 0px 4px 4px #ebebeb;
    border-radius: 2px;
    cursor: pointer;
  }

  .box-form {
    width: 100%;
    height: 100%;
    background: rgba(43, 40, 57, .2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    &_hide {
      width: 1px;
      height: 1px;
      overflow: hidden;
      opacity: 0;
    }
  }

  .wrap-form {
    width: 300px;
    padding: 0 20px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  form {
    display: flex;
    flex-flow: column;
  }

  h3 {
    padding: 20px 0;
    text-align: center;
  }
  label {
    margin-bottom: 20px;
  }

  input, select {
    margin-bottom: 20px;
    height: 30px;
    border: 1px solid #e6e6e6;
  }

  .btn-add {
    margin-bottom: 20px;
    height: 30px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #fff;
    background: #4943cd;
    cursor: pointer;
  }
</style>
