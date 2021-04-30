<template>
  <th>
    <div>
      <p>{{header.title}}</p>
      <p>
        (Нестандартная логика "заголовок")
      </p>
    </div>
  </th>
</template>

<script>
export default {
  name: 'TableCustomHeader',

  props: {
    header: {
      type: Object,
      default() {
        return {};
      },
    },
  },

};
</script>