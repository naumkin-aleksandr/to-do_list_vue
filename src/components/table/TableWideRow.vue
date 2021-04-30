<template>
  <tr>
    <td :colspan="headers.length">
      <component
        :is="component"
        :waybill="waybill"
      ></component>
    </td>
  </tr>
</template>

<script>

export default {
  name: 'ATableWideRow',

  props: {
    component: {
      type: Object,
      default() {
        return null;
      },
    },
    waybill: {
      type: Object,
      default() {
        return {};
      },
    },
    headers: {
      type: Array,
      default() {
        return [];
      },
    },
  },

};
</script>
