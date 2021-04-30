<template>
  <div class="app" id="app" >
    <h1 class="app__title">Тестовое задание</h1>
    <div class="app__wrap">
      <AddWaybill class="app__box-1"/>
      <div class="app__box-2 app__box-flex">
        <Sorting />
        <ToggleView/>
      </div>
      <Filters class="app__box-3"/>
      <router-view class="app__box-4"></router-view>
    </div>
  </div>
</template>

<script>

import AddWaybill from './components/AddWaybill.vue';
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
      padding: 30px 110px;
      display: grid;
      grid: 70px auto / 280px 910px;
      grid-gap: 20px;
    }

    &__box-flex {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 1350px) {
    .app {
      &__title {
        padding: 50px 30px;
      }

      &__wrap {
        padding: 30px;
        grid: repeat(4, auto)/ repeat(3, 1fr);
      }

      &__box {
        &-2 {
          grid-column: 2 /span 2;
        }
        &-3 {
          width: 280px;
        }
        &-4 {
          grid-column: 1 /span 3;
        }
      }
    }
  }
</style>
