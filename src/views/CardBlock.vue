<template>
  <div class="card-list">
    <CardItem  v-for="waybill in getWaybills" :key="waybill.id" :waybill="waybill"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardItem from '../components/CardItem.vue';

export default {
  components: {
    CardItem,
  },
  computed: {
    ...mapGetters(['getWaybills']),
  },
};
</script>

<style lang="scss" scoped>
  .card-list {
    width: 910px;
    margin-bottom: auto;
    display: flex;
    flex-flow: wrap;
  }
</style>
