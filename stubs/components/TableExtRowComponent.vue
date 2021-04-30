<template>
  <div style="padding: 10px; background: #eee;">
    ID: {{waybill.id}} <br>
    (Здесь расширенная логика строк)
  </div>
</template>

<script>
export default {
  name: 'TableExtRowComponent',
  props: ['waybill'],
};
</script>