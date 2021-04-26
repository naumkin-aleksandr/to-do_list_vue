<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Номер накладной</th>
      <th>Тип заказа</th>
      <th>Дата создания</th>
      <th></th>
    </tr>
    <TableItem v-for="waybill in getWaybills" :key="waybill.id" :waybill="waybill"/>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import TableItem from '../components/TableItem.vue';

export default {
  components: {
    TableItem,
  },
  computed: {
    ...mapGetters(['getWaybills']),
  },
};
</script>

<style lang="scss" scoped>
  table {
    border: 1px solid #e6e6e6;
  }

  th {
    padding: 10px 45px;
    background: #e6e6e6;
    border-right: 3px solid #fff;

    &:last-child {
      border-right: none;
    }
  }
</style>
