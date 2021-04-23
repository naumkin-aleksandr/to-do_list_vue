<template>
  <tr>
    <td>
      <span>{{waybill.id}}</span>
    </td>
    <td>
      <input v-if="editor" type="text" v-model="number">
      <span v-else>{{waybill.number}}</span>
    </td>
    <td>
      <select v-if="editor" v-model="type">
        <option value="RUED">RUED</option>
        <option value="RUEX">RUEX</option>
        <option value="RUSG">RUSG</option>
      </select>
      <span v-else>{{waybill.type}}</span>
    </td>
    <td>
      <input v-if="editor" type="text" v-model="date">
      <span v-else>{{waybill.date}}</span>
    </td>
    <td>
      <div class="box-btn"
        :class="{'box-btn_border': !hideButtons}"
      >
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
        <button class="btn-open"
        @click="showBtn"
        ></button>
      </div>
    </td>
  </tr>
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
  tr {
    border-bottom: 1px solid #e6e6e6;
  }

  td {
    padding: 10px 5px;
    position: relative;
  }

  .box-btn {
    display: flex;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);

    &_border {
      border: 1px solid #b9b7b7;
    }
  }

  .btn-open {
    width: 20px;
    height: 30px;
    background: none;
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      width: 5px;
      height: 5px;
      background: #647a8c;
      box-shadow: 0 10px 0 0 #647a8c, 0 20px 0 0 #647a8c;
      border-radius: 50%;
      position: absolute;
      top: 2.5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .btn-control {
    width: 23px;
    height: 23px;
    margin: 4px 5px 0 0;
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
    width: 230px;
  }
</style>
