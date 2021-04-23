<template>
  <div class="app" id="app" >
    <h1 class="app__title">Тестовое задание</h1>
    <div class="app__wrap">
      <AddWaybill/>
      <div class="app__box">
        <Sorting/>
        <ToggleView/>
      </div>
      <Filters/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import AddWaybill from './components/AddWaybil.vue';
import Sorting from './components/Sorting.vue';
import Filters from './components/Filters.vue';
import ToggleView from './components/ToggleView.vue';

export default {
  name: 'App',
  components: {
    Sorting,
    Filters,
    AddWaybill,
    ToggleView,
  },
};
</script>

<style lang="scss">
  @import './style/reset.scss';
  @import './style/common-styles';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app {
    &__title {
      min-width: 900px;
      margin-bottom: 40px;
      padding: 100px 110px;
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 35px;
      letter-spacing: 2px;
      color: #fff;
      text-shadow: 0 1px 0 #000;
      background: linear-gradient(
      267.21deg,
      rgba(134, 4, 137, 0.785707) 0%,
      rgba(159, 12, 162, 0.762269) 43.22%,
      rgba(5, 1, 190, 0.734375) 100%
      );
    }

    &__wrap {
      padding: 30px 110px 30px 120px;
      display: grid;
      grid: 70px auto / 280px 910px;
      grid-gap: 20px;
    }

    &__box {
      display: flex;
      align-items: center;
    }
  }
</style>
