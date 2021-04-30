<template>
  <div style="padding: 10px; background: #eee;">
    ID: {{waybill.id}} /
    Номер: {{waybill.number}} /
    Тип: {{waybill.type}} /
    Дата: {{waybill.date}} 
    <br>
    (Здесь расширенная логика строк)
  </div>
</template>

<script>
export default {
  name: 'TableExtRowComponent',
  props: ['waybill'],
};
</script>