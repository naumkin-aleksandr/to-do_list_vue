<template>
  <table>
    <tr>
      <TableTh v-for="header in headers" :key="header.id" :header="header"/>
    </tr>
    <template  v-for="waybill in getWaybills">
    <TableItem
      :key="waybill.id + 'row'"
      :waybill="waybill"
      :headers="headers"
      />
      <TableWideRow
        :key="waybill.id"
        :component="useExtRowComponent"
        :waybill="waybill"
        :headers="headers"
      />
    </template>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import TableItem from '../components/TableItem.vue';
import TableTh from '../components/table/TableTh.vue';
import TableWideRow from '../components/table/TableWideRow.vue';
import TableCustomHeader from '../../stubs/components/TableCustomHeader.vue';
import TableExtRowComponent from '../../stubs/components/TableExtRowComponent.vue';

export default {
  components: {
    TableItem,
    TableTh,
    TableWideRow,
  },

  computed: {
    ...mapGetters(['getWaybills']),
  },
  data() {
    return {
      headers: [
        {
          key: 'id',
          title: 'ID',
        },
        {
          key: 'number',
          title: 'Номер накладной',
          useHeaderComponent: TableCustomHeader,
        },
        {
          key: 'typ',
          title: 'Тип заказа',
        },
        {
          key: 'data',
          title: 'Дата создания',
        },
        {
          key: 'actions',
          title: '',
          useHeaderComponent: TableCustomHeader,
        },
      ],
      useExtRowComponent: TableExtRowComponent,
    };
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
