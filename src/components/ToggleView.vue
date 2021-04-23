<template>
  <div class="toggle__wrap">
    <router-link
      class="toggle__btn toggle__btn_block"
      to="/cardBlock"
      exact
      ></router-link>
    <router-link
      class="toggle__btn toggle__btn_tablet"
      to="/"
      exact
      ></router-link>
  </div>
</template>

<style lang="scss" scoped>
.toggle {
  &__wrap {
    display: flex;
  }

  &__btn {
    width: 40px;
    height: 40px;
    background: #fff;
    border: 1px solid #647a8c;
    position: relative;
    cursor: pointer;

    &_active {
      background: #e5e9ec;
    }

    &_block {
      border-radius: 5px 0 0 5px;
      &::before {
        content: '';
        width: 8px;
        height: 8px;
        background: #045da7;
        box-shadow: 12px 0 0 0 #045da7,
          0 12px 0 0 #045da7, 12px 12px 0 0 #045da7;
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }

    &_tablet {
      border-radius: 0 5px 5px 0;
      &::before {
        content: '';
        width: 20px;
        height: 4px;
        background: #045da7;
        box-shadow: 0 8px 0 0 #045da7, 0 16px 0 0 #045da7;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
